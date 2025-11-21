import { useEffect, useMemo, useState } from 'react';

export interface UtmParams {
  source: string | null;
  medium: string | null;
  campaign: string | null;
}

const STORAGE_KEY = 'igw_utm_params_v1';

function parseUtmFromSearch(search: string): UtmParams {
  const params = new URLSearchParams(search);
  const source = params.get('utm_source');
  const medium = params.get('utm_medium');
  const campaign = params.get('utm_campaign');
  return { source, medium, campaign };
}

function loadFromStorage(): UtmParams | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as UtmParams;
    return parsed;
  } catch {
    return null;
  }
}

function saveToStorage(utm: UtmParams) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
  } catch {}
}

export function useUtmParams(): UtmParams {
  const [utm, setUtm] = useState<UtmParams>(() => {
    // Try to read from URL first (SSR-safe default)
    if (typeof window !== 'undefined') {
      const fromUrl = parseUtmFromSearch(window.location.search);
      if (fromUrl.source || fromUrl.medium || fromUrl.campaign) {
        return fromUrl;
      }
      const stored = loadFromStorage();
      if (stored) return stored;
    }
    return { source: null, medium: null, campaign: null };
  });

  useEffect(() => {
    const fromUrl = parseUtmFromSearch(window.location.search);
    if (fromUrl.source || fromUrl.medium || fromUrl.campaign) {
      setUtm(fromUrl);
      saveToStorage(fromUrl);
    } else {
      const stored = loadFromStorage();
      if (stored) setUtm(stored);
    }
  }, []);

  // Stable memo to avoid unnecessary rerenders downstream
  return useMemo(() => utm, [utm]);
}

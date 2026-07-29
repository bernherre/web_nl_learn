export const PROFILE_REGISTRY_KEY = 'nl-learn:profiles:v1';
export const ACTIVE_PROFILE_KEY = 'nl-learn:active-profile:v1';
export const GUEST_PROFILE_ID = 'gast';

export function profileIdFromName(name) {
  const base = String(name || '')
    .trim()
    .toLocaleLowerCase('nl-NL')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/gu, '')
    .replace(/[^a-z0-9]+/gu, '-')
    .replace(/^-+|-+$/gu, '')
    .slice(0, 36);
  return base || `profiel-${Date.now()}`;
}

export function normaliseProfile(raw = {}) {
  return {
    id: String(raw.id || profileIdFromName(raw.name)),
    name: String(raw.name || 'Leerling').trim().slice(0, 60) || 'Leerling',
    createdAt: String(raw.createdAt || new Date().toISOString()),
    lastUsedAt: String(raw.lastUsedAt || new Date().toISOString()),
    guest: Boolean(raw.guest),
  };
}

export function profileProgressKey(profileId) {
  return `nl-learn:profile:${profileId}:progress:v1`;
}

export function profileExerciseKey(profileId) {
  return `nl-learn:profile:${profileId}:exercise-stats:v1`;
}

export function uniqueProfileId(name, profiles = []) {
  const base = profileIdFromName(name);
  const ids = new Set(profiles.map((profile) => profile.id));
  if (!ids.has(base)) return base;
  let suffix = 2;
  while (ids.has(`${base}-${suffix}`)) suffix += 1;
  return `${base}-${suffix}`;
}

export function exportProfilePayload(profile, progress, exerciseStats) {
  return {
    format: 'nederlands-gewoon-doen-profile',
    version: 1,
    exportedAt: new Date().toISOString(),
    profile: normaliseProfile(profile),
    progress,
    exerciseStats,
  };
}

export function validateProfileImport(payload) {
  if (!payload || payload.format !== 'nederlands-gewoon-doen-profile' || payload.version !== 1) return false;
  return Boolean(payload.profile?.name && payload.progress && payload.exerciseStats);
}

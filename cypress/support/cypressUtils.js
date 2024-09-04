/**
 * Filters out 'fetch' and 'xhr' requests from the side-panel log
 */
// eslint-disable-next-line import/prefer-default-export
export function hideBackgroundRequests () {
  const hideNames = ['fetch', 'xhr'];
  const hideUrlRegexes = [
    /^https?:\/\/(www\.)?google-analytics\.com/,
    /^https?:\/\/clarity\.ms/,
    /^https?:\/\/.*\.datadoghq\.com/,
    /^https?:\/\/.*\.datadoghq\.eu/,
    /^https?:\/\/.*\.mopinion\.com/,
    /^https?:\/\/.*\.zendesk\.com/,
    /^https?:\/\/browser-intake-datadoghq\.eu\/api\/v2\/rum/,
    /^https?:\/\/.*\.zendesk\.com/,
    /^https?:\/\/api\/v2\/rum/,
    /^https?:\/\/.*\.datadoghq\.eu\/api\/v2\/rum/,
    /^https?:\/\/browser-intake-datadoghq\.eu\/api\/v2\/rum/,
    /^https?:\/\/.*browser-intake-datadoghq\.eu\/api\/v2\/rum/,
    /^https?:\/\/ping.*browser-intake-datadoghq\.eu/,
    /^https?:\/\/believedigital\.zendesk\.com/,
    /^https:\/\/www\.google-analytics\.com\/j\/collect/,
    /^https:\/\/stats\.g\.doubleclick\.net\/j\/collect/,
    /^https:\/\/deploy\.mopinion\.com\/config/,
    /^https:\/\/n\.clarity\.ms\/collect/,
  ];

  Cypress.on('log:changed', (log) => {
    if (!hideNames.includes(log.displayName) || log.alias) return;

    const isUrlToHide = hideUrlRegexes.some((regex) => regex.test(log.url));
    if (!isUrlToHide) return;

    const logs = window.top.document.querySelectorAll(
      'li.command-name-request',
    );
    logs.forEach((logItem) => {
      const instKey = Object.keys(logItem)
        .find((key) => key.startsWith('__reactFiber$'));
      if (!instKey) return;

      const reactFiber = logItem[instKey];
      // eslint-disable-next-line max-len
      if (reactFiber?.return?.key === log.id && reactFiber.return.stateNode?.style) {
        reactFiber.return.stateNode.style.display = 'none';
        // eslint-disable-next-line no-param-reassign
        logItem.style.display = 'none';
      }
      if (/ping.*browser-intake-datadoghq\.eu/.test(log.url)) {
        // eslint-disable-next-line no-param-reassign
        logItem.style.display = 'none';
      }
    });
  });
}

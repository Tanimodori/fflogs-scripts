globalThis.pinMatchesFightEvent = (event, _fight) => {
  if (event.type === 'damage' && event.targetDisposition === 'friendly') {
    const unmitigated = event.unmitigatedAmount;
    const maxhp = event.targetResources?.maxHitPoints;
    if (maxhp && unmitigated >= maxhp / 0.95) {
      return true;
    }
  }
  return false;
};

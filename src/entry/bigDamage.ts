globalThis.pinMatchesFightEvent = (event, _fight) => {
  if (event.type === 'damage' && event.targetDisposition === 'friendly') {
    const unmitigated = event.unmitigatedAmount;
    const maxhp = event.targetResources?.maxHitPoints;
    if (maxhp && unmitigated * 1.1 >= maxhp) {
      return true;
    }
  }
  return false;
};

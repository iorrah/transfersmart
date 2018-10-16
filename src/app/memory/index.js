const memory = {
  save(spec) {
    const { memories } = this.state;

    let desc = ''
      + 'The amount of'
      + ' ' + spec.from.amount
      + ' ' + spec.from.currency
      + ' (rate: ' + spec.from.rate + ')'
      + ' was converted to'
      + ' ' + spec.to.amount
      + ' ' + spec.to.currency
      + ' (rate: ' + spec.to.rate + ')';

    console.info(desc);

    return this.setState({
      memories: memories.concat([{ desc, spec }]),
    });
  },

  getLastChangesAnalysis(spec = null) {
    const { memories } = this.state;
    const { length } = memories;
    let penultimate, last;

    if (spec) {
      penultimate = memories[length - 1].spec;
      last = spec;
    } else {
      penultimate = memories[length - 2].spec;
      last = memories[length - 1].spec;
    }

    return {
      was_equal: {
        from: {
          currency: (penultimate.from.currency === last.from.currency),
          amount: (penultimate.from.amount === last.from.amount),
        },
        to: {
          currency: (penultimate.to.currency === last.to.currency),
          amount: (penultimate.to.amount === last.to.amount),
        },
      },
    };
  },

  getUpdatedAndOutdatedModes(specs) {
    let outdatedMode, updatedMode;
    const temporaryMemory = Object.assign({}, specs);

    const wasEqual = memory
      .getLastChangesAnalysis
      .call(this, temporaryMemory)
      .was_equal;

    if (!wasEqual.to.currency) {

      /*
        The user has updated
        the 'to' dropdown select
      */

      outdatedMode = 'to';
      updatedMode = 'from';
    } else if (wasEqual.from.currency && wasEqual.from.amount) {

      /*
        The user has updated
        the 'to' input
      */

      outdatedMode = 'from';
      updatedMode = 'to';
    } else if (wasEqual.to.currency && wasEqual.to.amount) {

      /*
        The user has updated
        the 'from' input
      */

      outdatedMode = 'to';
      updatedMode = 'from';
    }

    return { outdatedMode, updatedMode };
  }
};

export default memory;

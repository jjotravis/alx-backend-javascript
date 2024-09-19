const { expect } = require('chai');
const { it, describe } = require('mocha');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('', () => {
  it('checking if numbers round with spies', () => {
    const checkSoy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(checkSoy.calledOnce).to.be.true;
    expect(checkSoy.calledWith('SUM', 100, 20)).to.be.true;
    checkSoy.restore();
  });
});

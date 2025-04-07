import React from 'react'

const Cy = () => {


  return (
    <div className="trading-form">
        <div className="mb-4">
            <label className="form-label">Amount to Send</label>
            <div className="currency-input">
                <div className="currency-select" onClick={() => setShowSendDropdown(!showSendDropdown)}>
                    <CurrencyIcon currency={sendCurrency} />
                    <span className="ms-2">{sendCurrency}</span>
                    <i className="fas fa-chevron-down ms-2" style={{ fontSize: "12px" }}></i>
                    
                    {/* Send Currency Dropdown */}
                    {showSendDropdown && (
                        <div className="currency-dropdown show">
                        {sendCurrencies.map(currency => (
                            <div 
                                key={currency} 
                                className="currency-option"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleSendCurrencyChange(currency);
                                }}
                            >
                                <CurrencyIcon currency={currency} />
                                <span className="currency-option-name ms-2">{currencies[currency].name}</span>
                                <span className="currency-option-code">{currency}</span>
                            </div>
                        ))}
                        </div>
                    )}
                </div>
                <input 
                type="text" 
                className="currency-amount" 
                value={sendAmount}
                onChange={handleSendAmountChange}
                placeholder="0.00"
                />
            </div>
            </div>
            
            <div className="exchange-rate">
            {loading ? (
                <span className="exchange-rate-text">
                <div className="spinner"></div>
                Loading rates...
                </span>
            ) : (
                <span className="exchange-rate-text">
                1 {sendCurrency} = {getCurrentRate().toFixed(2)} {receiveCurrency}
                </span>
            )}
            <button className="refresh-btn" onClick={fetchExchangeRates}>
                <i className="fas fa-sync-alt"></i>
            </button>
            </div>
            
            {error && <div className="error-message">{error}</div>}
            
            <div className="mb-4">
            <label className="form-label">Amount to Receive</label>
            <div className="currency-input">
                <div className="currency-select" onClick={() => setShowReceiveDropdown(!showReceiveDropdown)}>
                <CurrencyIcon currency={receiveCurrency} />
                <span className="ms-2">{receiveCurrency}</span>
                <i className="fas fa-chevron-down ms-2" style={{ fontSize: "12px" }}></i>
                
                {/* Receive Currency Dropdown */}
                {showReceiveDropdown && (
                    <div className="currency-dropdown show">
                    {receiveCurrencies.map(currency => (
                        <div 
                        key={currency} 
                        className="currency-option"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleReceiveCurrencyChange(currency);
                        }}
                        >
                        <CurrencyIcon currency={currency} />
                        <span className="currency-option-name ms-2">{currencies[currency].name}</span>
                        <span className="currency-option-code">{currency}</span>
                        </div>
                    ))}
                    </div>
                )}
                </div>
                <input 
                type="text" 
                className="currency-amount" 
                value={receiveAmount}
                readOnly
                placeholder="0.00"
                />
            </div>
        </div>
    </div>
  )
}

export default Cy
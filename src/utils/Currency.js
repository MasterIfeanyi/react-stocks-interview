const currencies = {
    USD: { name: "US Dollar", symbol: "$", icon: "dollar-sign" },
    GBP: { name: "British Pound", symbol: "£", icon: "pound-sign" },
    USDT: { name: "Tether", symbol: "₮", color: "#26A17B" },
    NGN: { name: "Nigerian Naira", symbol: "₦", color: "#34A853" },
    EUR: { name: "Euro", symbol: "€", icon: "euro-sign" },
    BTC: { name: "Bitcoin", symbol: "₿", color: "#F7931A" },
    ETH: { name: "Ethereum", symbol: "Ξ", color: "#627EEA" }
};

export const  CurrencyIcon = ({ currency }) => {
    if (currency === "USDT") {
    return (
        <div className="crypto-icon" style={{ backgroundColor: currencies.USDT.color, width: "24px", height: "24px" }}>
        <span style={{ color: "white", fontSize: "12px" }}>{currencies.USDT.symbol}</span>
        </div>
    );
    } else if (currency === "NGN") {
    return (
        <div className="crypto-icon" style={{ backgroundColor: currencies.NGN.color, width: "24px", height: "24px" }}>
        <span style={{ color: "white", fontSize: "12px" }}>{currencies.NGN.symbol}</span>
        </div>
    );
    } else if (currency === "USD") {
    return (
        <div className="crypto-icon" style={{ backgroundColor: "#1B75BC", width: "24px", height: "24px" }}>
        <i className="fas fa-dollar-sign text-white" style={{ fontSize: "12px" }}></i>
        </div>
    );
    } else if (currency === "GBP") {
    return (
        <div className="crypto-icon" style={{ backgroundColor: "#833177", width: "24px", height: "24px" }}>
        <i className="fas fa-pound-sign text-white" style={{ fontSize: "12px" }}></i>
        </div>
    );
    } else if (currency === "BTC") {
    return (
        <div className="crypto-icon" style={{ backgroundColor: currencies.BTC.color, width: "24px", height: "24px" }}>
        <i className="fab fa-bitcoin text-white" style={{ fontSize: "12px" }}></i>
        </div>
    );
    } else if (currency === "ETH") {
    return (
        <div className="crypto-icon" style={{ backgroundColor: currencies.ETH.color, width: "24px", height: "24px" }}>
        <i className="fab fa-ethereum text-white" style={{ fontSize: "12px" }}></i>
        </div>
    );
}

}
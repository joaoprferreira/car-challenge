export default function useVehicle() {
  function formatPrice(number = 0, currencySymbol = "R$") {
    if (isNaN(number)) {
      return "Valor inválido";
    }
    const numberString = number.toString();
    const [integerPart, decimalPart = ""] = numberString.split(".");
    const formattedIntegerPart = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
    return (
      currencySymbol +
      formattedIntegerPart +
      (decimalPart ? "." + decimalPart : "")
    );
  }

  const formatTimesTamp = (time?: any) => {
    const date = new Date(time * 1000);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formattedDate = date.toLocaleString("pt-BR", options);
    return formattedDate;
  };

  return { formatPrice, formatTimesTamp };
}

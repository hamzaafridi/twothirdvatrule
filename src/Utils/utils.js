export default function checkTwoThirdVAT(totalProductInclVAT, totalServiceInclVAT) {
    const totalProductExVat = totalProductInclVAT / 1.23;
    const totalServiceExVat = totalServiceInclVAT / 1.135;
    const totalInvoiceExVat = totalProductExVat + totalServiceExVat;
    const cutoff = totalInvoiceExVat * 2 / 3;
    const isTwoThirdValid = totalProductExVat < cutoff;
    const message = `
        Hi, \n
        the ex vat total of product is: ${totalProductExVat.toFixed(2)} \n
        the ex vat total of service is: ${totalServiceExVat.toFixed(2)} \n
        the ec exempt total of invoice is: ${totalProductExVat.toFixed(2)}+ ${totalServiceExVat.toFixed(2)} = ${totalInvoiceExVat.toFixed(2)} \n
        and the cutoff is: ${totalInvoiceExVat.toFixed(2)} x 2 / 3 = ${cutoff.toFixed(2)} \n
        as a result, the total of product is ${totalProductExVat.toFixed(2)} ${isTwoThirdValid ? "<" : ">" } ${cutoff.toFixed(2)} \n
        so two third vat rule is ${isTwoThirdValid ? "VALID": "INVALID"} \n
    `;
    return {
        isTwoThirdValid,
        totalProductExVat,
        totalServiceExVat,
        totalInvoiceExVat,
        cutoff,
        message
    }
}
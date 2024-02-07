export default function checkTwoThirdVAT(totalProductInclVAT, totalServiceInclVAT) {
    const totalProductExVat = totalProductInclVAT / 1.23;
    const totalServiceExVat = totalServiceInclVAT / 1.135;
    const totalInvoiceExVat = totalProductExVat + totalServiceExVat;
    const cutoff = totalInvoiceExVat * 2 / 3;
    const isTwoThirdValid = totalProductExVat < cutoff;
    const message = `
        Hi, \n
        the vat exempt total of invoice is: ${totalProductExVat}+ ${totalServiceExVat} = ${totalInvoiceExVat} \n
        and the cutoff is: ${totalInvoiceExVat} x 2 / 3 = ${cutoff} \n
        as a result, the total of product is ${totalProductExVat} ${isTwoThirdValid ? "<" : ">" } ${cutoff} \n
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
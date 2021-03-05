export const downloadPDF = function(data, fileName) {
    const a = document.createElement('a')
    a.setAttribute('hidden', '')
    a.setAttribute('href', data)
    a.setAttribute('download', `${fileName}.pdf`)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
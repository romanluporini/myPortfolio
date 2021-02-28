export const downloadPDF = function(data, fileName) {
    const blob = new Blob([data], { type: 'text/pdf'})
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('hidden', '')
    a.setAttribute('href', url)
    a.setAttribute('download', `${fileName}.pdf`)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
var sites = [
'drawing-1.html', 
'drawing-2.html', 
'drawing-3.html', 
'drawing-4.html', 
'drawing-5.html', 
'drawing-6.html', 
'drawing-7.html',
'drawing-12.html',
'drawing-13.html',
'drawing-14.html',
'drawing-16.html',
'drawing-17.html'
]; function randomSite() {var i = parseInt(Math.random() * sites.length); location.href = sites[i];}
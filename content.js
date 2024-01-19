function gatherG$bi() {
  if (window.location.host.includes('tothgabi'))
    return [...document.querySelectorAll('*')]

  const slugs = ['toth_gabi', 'toth-gabi', 'tothgabi']

  const filters = [
    e => e.textContent.toLowerCase().includes('tóth gabi') || e.textContent.toLowerCase().includes('gabi tóth'),
    e => slugs.some(slug => e.title?.toLowerCase().includes(slug))
  ]

  return [...document.querySelectorAll('*')]
    .filter(e => e.childElementCount === 0)
    .filter(e => filters.some(f => f(e)))
}

function highlightG$bi() {
  gatherG$bi()
    .map(g$bi => g$bi.closest('div'))
    .filter(div => !!div)
    .forEach(div => div.style.border = '4px solid green')
}

function onlyG$bi() {
  const g$biElements = gatherG$bi()

  const allElems = [...document.querySelectorAll('*')];

  allElems.forEach(element => element.style.opacity = '0')

  for (const g$bi of g$biElements) {
    let at = g$bi
    while (at) {
      at.style.opacity = '1'
      at = at.parentElement
    }
  }
}

chrome.storage.local.get('isTGExtensionActive', function(data) {
  // const operation = highlightG$bi
  const operation = onlyG$bi
  if (data.isTGExtensionActive !== false) {
    operation.call()

    // MutationObserver DOM change agent
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        operation.call()
      });
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
});

export function useSeo() {
  const title = 'Phasma Calc'
  const description = 'Калькулятор для Phasmophobia'
  const image = '/og-image.webp'

  useSeoMeta({
    ogImage: image,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
  })

  useHead({
    htmlAttrs: { lang: 'ru' },
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  })

  /*  useSeoMeta({
    ogImage: image,
    ogTitle: title,
    author: author,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
    title: title,
    ogSiteName: title,
    applicationName: title,
  })

  useHead({
    htmlAttrs: { lang: 'ru' },
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    title: title,
  }) */
}

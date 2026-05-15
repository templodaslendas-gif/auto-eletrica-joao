import { useEffect } from 'react'
import { config } from '../config/config'

function setMeta(selector, content) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', content)
}

function setLink(selector, value) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('href', value)
}

export function useSEO() {
  useEffect(() => {
    const { seo, empresa } = config

    // Título da aba
    document.title = seo.titulo

    // Primary meta
    setMeta('meta[name="title"]', seo.titulo)
    setMeta('meta[name="description"]', seo.descricao)
    setMeta('meta[name="keywords"]', seo.keywords)
    setMeta('meta[name="author"]', empresa.nome)

    // Canonical
    setLink('link[rel="canonical"]', seo.url)

    // Open Graph
    setMeta('meta[property="og:title"]', seo.titulo)
    setMeta('meta[property="og:description"]', seo.descricao)
    setMeta('meta[property="og:url"]', seo.url)
    setMeta('meta[property="og:image"]', seo.imagemOg)

    // Twitter
    setMeta('meta[property="twitter:title"]', seo.titulo)
    setMeta('meta[property="twitter:description"]', seo.descricao)
    setMeta('meta[property="twitter:image"]', seo.imagemOg)
  }, [])
}

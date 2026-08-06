# Alves R

Landing page da Alves R em Next.js (App Router) + TypeScript + CSS Modules.

## Rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

```
app/
  layout.tsx        fonte, metadata, <html>/<body>
  page.tsx          composição das seções
  globals.css       design tokens (cores, raios, espaçamentos) e reset
components/         uma seção por arquivo, cada uma com seu .module.css
  Navbar, Hero, Projects, Services, Marquee,
  Testimonials, Contact, Footer
  Photo.tsx         placeholder de imagem (aceita src real)
  Reveal.tsx        animação de entrada no scroll
lib/data.ts         textos, serviços e depoimentos
styles/shared.module.css   wrap, section, heading, tag
```

## Trocar as imagens

Coloque os arquivos em `public/images/` e passe `src` para o componente `Photo`:

```tsx
<Photo src="/images/hero.jpg" alt="Foto de Alves R" className={styles.photo} />
```

Sem `src`, o componente mostra o placeholder cinza com a silhueta.

Para usar o `next/image` (otimização automática), troque o `<img>` dentro de
`components/Photo.tsx` por `<Image fill sizes="..." />`.

## Ajustar as cores

Tudo vem de variáveis CSS em `app/globals.css`:

| Variável      | Uso                          |
| ------------- | ---------------------------- |
| `--lime`      | azul de destaque da marca    |
| `--bg`        | fundo da página (cinza)      |
| `--surface`   | fundo dos blocos escuros     |
| `--surface-2` | cartões e campos             |
| `--ink`       | texto sobre fundo claro/azul |

## Conteúdo

Textos das seções ficam em `lib/data.ts`. Editar lá atualiza a página inteira.

## Formulários

`Contact.tsx` e `Footer.tsx` já têm estado local e `onSubmit`. Ligue sua rota
(`app/api/...`) ou serviço de e-mail dentro do `handleSubmit`.

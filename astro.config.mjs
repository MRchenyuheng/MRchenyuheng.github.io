import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import swup from '@swup/astro'
import Compress from 'astro-compress'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeComponents from 'rehype-components' /* Render the custom directive content */
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import remarkDirective from 'remark-directive' /* Handle directives */
import remarkGithubAdmonitionsToDirectives from 'remark-github-admonitions-to-directives'
import remarkMath from 'remark-math'
import remarkSectionize from 'remark-sectionize'
import { AdmonitionComponent } from './src/plugins/rehype-component-admonition.mjs'
import { GithubCardComponent } from './src/plugins/rehype-component-github-card.mjs'
import { parseDirectiveNode } from './src/plugins/remark-directive-rehype.js'
import { remarkExcerpt } from './src/plugins/remark-excerpt.js'
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs'

// https://astro.build/config
export default defineConfig({
  site: 'https://lemontrees.top/',
  // base: "/",
  trailingSlash: 'always',
  integrations: [
    tailwind({
      nesting: true,
    }),
    swup({
      theme: false,
      animationClass: 'transition-swup-', // see https://swup.js.org/options/#animationselector
      // the default value `transition-` cause transition delay
      // when the Tailwind class `transition-all` is used
      containers: ['main', '#toc'],
      smoothScrolling: true,
      cache: true,
      preload: true,
      accessibility: true,
      updateHead: true,
      updateBodyClass: false,
      globalInstance: true,
    }),
    icon({
      include: {
        'preprocess: vitePreprocess(),': ['*'],
        'fa6-brands': ['*'],
        'fa6-regular': ['*'],
        'fa6-solid': ['*'],
      },
    }),
    svelte(),
    sitemap(),
    Compress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true, // https://github.com/PlayForm/Compress/issues/376
      },
    }),
  ],
  markdown: {
    // --------------- 新增：代码高亮配置 ---------------
    // --------------- 修正：代码高亮配置 ---------------
    syntaxHighlight: 'shiki', // 启用 shiki 代码高亮
    shikiConfig: {
      // 双主题适配（绑定html的dark类，和主题切换联动）
      themes: {
        light: 'one-dark-pro', // 更清晰的浅色主题（替代github-light）
        dark: 'one-dark-pro', // 更清晰的深色主题（替代github-dark）
      },
      lineNumbers: true, // 显示代码行号
      wrap: false, // 关闭自动换行（避免样式错乱，改用横向滚动更符合代码阅读习惯）
      experimentalThemes: true, // 启用实验性主题特性，确保明暗切换生效
      // 支持的代码语言（补充常用语言，确保语法解析准确）
      langs: [
        'c',
        'cpp', // 补充cpp，避免C语言高亮识别问题
        'javascript',
        'typescript',
        'html',
        'css',
        'scss',
        'bash',
        'shell', // 补充shell
        'python',
        'astro',
        'markdown',
        'json',
        'yaml',
        'toml',
        'latex', // 新增：添加 LaTeX 语言支持
        'tex', // 补充：添加 tex 别名（兼容不同的代码块标识）
      ],
    },
    // --------------------------------------------------
    // --------------------------------------------------
    remarkPlugins: [
      remarkMath,
      remarkReadingTime,
      remarkExcerpt,
      remarkGithubAdmonitionsToDirectives,
      remarkDirective,
      remarkSectionize,
      parseDirectiveNode,
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [
        rehypeComponents,
        {
          components: {
            github: GithubCardComponent,
            note: (x, y) => AdmonitionComponent(x, y, 'note'),
            tip: (x, y) => AdmonitionComponent(x, y, 'tip'),
            important: (x, y) => AdmonitionComponent(x, y, 'important'),
            caution: (x, y) => AdmonitionComponent(x, y, 'caution'),
            warning: (x, y) => AdmonitionComponent(x, y, 'warning'),
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor'],
          },
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              className: ['anchor-icon'],
              'data-pagefind-ignore': true,
            },
            children: [
              {
                type: 'text',
                value: '#',
              },
            ],
          },
        },
      ],
    ],
  },
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // temporarily suppress this warning
          if (
            warning.message.includes('is dynamically imported by') &&
            warning.message.includes('but also statically imported by')
          ) {
            return
          }
          warn(warning)
        },
      },
    },
  },
})

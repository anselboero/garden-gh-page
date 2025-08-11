import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"
// @ts-ignore: typescript doesn't know about our inline bundling system
// so we need to silence the error
import script from "./scripts/footer.inline"

interface Options {
  links: Record<string, string>,
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps,
  ) => {
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
          <div>
            <p>
              {i18n(cfg.locale).components.footer.createdWith}{" 💙 with "}
              <a href="https://obsidian.md/">Obsidian</a>{", "}
              <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>
              {", and "}
              <a href="https://pages.github.com/">Github Pages</a>.
              <br />
              This website does not use 🍪.
            </p>
            <ul>
              {Object.entries(links).map(([text, link]) => (
                <li>
                  <a href={link}>{text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div class="flex-container">
            <div id="currentlyreading">
            </div>
          <div id="lastmoviewatched">
            </div>
        </div>
      </footer>
    )
  }

  Footer.css = style
  Footer.afterDOMLoaded = script
  return Footer
}) satisfies QuartzComponentConstructor

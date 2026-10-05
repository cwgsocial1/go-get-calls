<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Keep the marketing experience at `/` with hash navigation because the approved brief explicitly requires one scrolling page.
- Keep reusable website content, controls and illustrative automation mockups in `src/components/automations` so section content and repeated booking links stay consistent.
- Contact submissions validate in the browser and open a prefilled email; do not claim server delivery without a connected email service.
- Keep unspecified external destinations and legal documents behind labeled placeholder dialogs instead of inventing URLs or legal promises.
- Define website visual roles in the global semantic token system; feature code consumes tokens rather than raw colors.

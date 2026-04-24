export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    slider: {
      slots: {
        root: '',
        range: 'bg-blue'
      },
      variants: {
        color: {
          primary: {
            range: 'bg-blue!',
            thumb: 'bg-blue! focus-visible:outline-white! ring-white!'
          }
        },
        size: {
          md: {
            range: 'h-[4px]!',
            track: 'h-[2px]!',
            thumb: 'bg-default w-[8px]! h-[8px]! focus-visible:outline-8!:outline-offset-8!'
          }
        }
      }
    },
    breadcrumb: {
      slots: {
        list: 'gap-0',
        link: 'text-sm font-circe text-text-gray'
      },
      variants: {
        active: {
          true: {
            link: 'text-text-black font-normal'
          },
          
        },
      }
    }
  }
})

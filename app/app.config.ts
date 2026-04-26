export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    checkbox: {
      slots: {
        root: 'h-fit! flex! items-center!',
        base: 'w-6.5! h-6.5! flex flex-col items-center justify-center',
        indicator: 'w-4! h-4!',
      },
      variants: {
        color: {
          primary: {
            base: '',
            indicator: 'text-blue! bg-transparent!'
          }
        }
      }
    },
    collapsible: {
      slots: {
        content: ''
      }

    },
    pagination: {
      slots: {
        root: '',
        list: 'flex items-center gap-1',
        ellipsis: 'pointer-events-none',
        label: 'min-w-5 text-center',
        first: 'hidden!',
        prev: 'w-[41px]! h-[44px]! flex items-center! justify-center! border-blue/20!',
        item: 'data-[selected]:bg-white! data-[selected]:ring-2! data-[selected]:text-text-black! data-[selected]:ring-blue data-[selected]:bg-white! w-[41px]! h-[44px]! flex items-center! justify-center! border-blue/20!',
        next: 'w-[41px]! h-[44px]! flex items-center! justify-center! border-blue/20!',
        last: 'hidden!'
      }
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

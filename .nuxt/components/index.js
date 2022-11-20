export { default as Footer } from '../../components/Footer.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Menu } from '../../components/Menu.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as ElementsBlogComponent } from '../../components/elements/BlogComponent.vue'
export { default as ElementsBlogsComponent } from '../../components/elements/BlogsComponent.vue'
export { default as ElementsCategoryListComponent } from '../../components/elements/CategoryListComponent.vue'
export { default as ElementsPortfolioComponent } from '../../components/elements/PortfolioComponent.vue'
export { default as ElementsPortfoliosComponent } from '../../components/elements/PortfoliosComponent.vue'
export { default as ElementsProgressComponent } from '../../components/elements/ProgressComponent.vue'
export { default as ElementsService } from '../../components/elements/Service.vue'
export { default as Notify } from '../../components/notify/Notify.vue'
export { default as SectionsAbout } from '../../components/sections/About.vue'
export { default as SectionsIntro } from '../../components/sections/Intro.vue'
export { default as SectionsSkills } from '../../components/sections/Skills.vue'
export { default as FrontAboutUs } from '../../components/front/AboutUs.vue'
export { default as FrontCart } from '../../components/front/Cart.vue'
export { default as UiBtn } from '../../components/ui/Btn.vue'
export { default as UiSectionHeader } from '../../components/ui/SectionHeader.vue'
export { default as AdminTable } from '../../components/admin/form/AdminTable.vue'
export { default as AdminForm } from '../../components/admin/form/Form.vue'
export { default as AdminHeader } from '../../components/admin/layouts/AdminHeader.vue'
export { default as AdminSidebar } from '../../components/admin/layouts/AdminSidebar.vue'
export { default as AdminMediaAddMedia } from '../../components/admin/media/AddMedia.vue'
export { default as AdminMedia } from '../../components/admin/media/AdminMedia.vue'
export { default as AdminMediaItem } from '../../components/admin/media/AdminMediaItem.vue'
export { default as AdminMediaTable } from '../../components/admin/media/MediaTable.vue'
export { default as AdminMediaTableItem } from '../../components/admin/media/MediaTableItem.vue'
export { default as AdminMenu } from '../../components/admin/navigation/AdminMenu.vue'
export { default as AdminMenuItem } from '../../components/admin/navigation/AdminMenuItem.vue'
export { default as AdminUtilsAtributeComponent } from '../../components/admin/utils/AtributeComponent.vue'
export { default as AdminUtilsAutoComplete } from '../../components/admin/utils/AutoComplete.vue'
export { default as AdminWidgetsInfoWidget } from '../../components/admin/widgets/InfoWidget.vue'
export { default as FrontProductCategoryFilter } from '../../components/front/product/CategoryFilter.vue'
export { default as FrontProductGallery } from '../../components/front/product/ProductGallery.vue'
export { default as FrontProductLoop } from '../../components/front/product/ProductLoop.vue'
export { default as FrontProductLoopItem } from '../../components/front/product/ProductLoopItem.vue'
export { default as FrontProductQuantity } from '../../components/front/product/Quantity.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

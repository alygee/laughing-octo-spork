import e from"../../node_modules/style-inject/dist/style-inject.es.js";var r=':root{--va-gray-light:#acb5be;--va-light-gray:#eee;--va-light-gray3:#f5f8f9;--va-lighter-gray:#ddd;--va-charcoal:#555;--va-darkest-gray:#333;--va-almost-black:#161616;--va-hover-black:#222;--va-vue-green:#4ae387;--va-vue-light-green:#dbf9e8;--va-light-green:#c8f9c5;--va-lighter-green:#d6ffd3;--va-light-blue:#dcf1ff;--va-light-yellow:#fff1c8;--va-light-pink:#ffcece;--va-vue-darkest-blue:#34495e;--va-vue-turquoise:#dbf9e7;--va-white:#fff;--va-theme-danger:#e34b4a;--va-theme-warning:#ffc200;--va-theme-red:#e34a4a;--va-theme-orange:#f7cc36;--va-theme-blue:#4ab2e3;--va-theme-blue-dark:#2c82e0;--va-theme-violet:#db76df;--va-theme-pale:#d9d9d9;--va-primary:var(--va-vue-green);--va-danger:var(--va-theme-red);--va-warning:var(--va-theme-orange);--va-info:var(--va-theme-blue);--va-success:var(--va-vue-green);--va-secondary:#babfc2;--va-light-gray2:#eff4f5;--va-dark-gray:#282828;--va-gray:#adb3b9;--va-default-gray:#8396a5;--va-dark-blue:#0e4ac4;--va-text-gray:#b4b4b4;--va-markdown-code:#d7234e;--va-prism-background:#f4f8fa;--va-separator-color:#e6e9ec;--va-border:0;--va-font-family:"Source Sans Pro",sans-serif;--va-letter-spacing:0.0375rem;--va-background-color:#fff;--va-swing-transition:0.3s cubic-bezier(0.25,0.8,0.5,1);--va-box-shadow:0 0.125rem 0.2rem 0 rgba(0,0,0,0.2);--va-block-border-radius:0.375rem;--va-block-border:thin solid rgba(52,56,85,0.25);--va-block-box-shadow:0 2px 3px 0 rgba(52,56,85,0.25);--va-control-box-shadow:none;--va-control-border:0;--va-transition:0.2s cubic-bezier(0.4,0,0.6,1);--va-outline-border-width:0.125rem;--va-outline-box-shadow:none;--va-square-border-radius:0.25rem;--va-box-shadow:0 2px 3px 0 rgba(52,56,85,0.25);--va-form-padding:1.25rem;--va-form-border-radius:0.125rem;--va-text-selected:#b3d4fc;--va-text-highlighted:#fff3d1;--va-link-color:var(--va-primary);--va-link-color-secondary:var(--va-secondary);--va-link-color-hover:var(--va-primary);--va-link-color-active:var(--va-primary);--va-link-color-visited:var(--va-primary);--va-muted:#7f828b;--va-li-background:var(--va-theme-blue-dark);--va-text-block:var(--va-light-gray3);--va-stripe-border-size:0.25rem;--va-box-shadow:0 0.25rem 0.5rem 0 rgba(59,63,73,0.15)}.layout{flex:1 1 100%;margin:auto;padding:1.5rem;width:100%}@media only screen and (min-width:768px){.layout{max-width:720px}}@media only screen and (min-width:992px){.layout{max-width:930px}}@media only screen and (min-width:1200px){.layout{max-width:1125px}}@media only screen and (max-width:767px){.layout{padding:1rem}}.layout.fluid{box-sizing:border-box;max-width:100%}.layout.fill-height{align-items:center;display:flex;height:100%}.layout.fill-height>.row{flex:1 1 auto;height:100%}.layout.gutter--xs{padding:.125rem}.layout.gutter--xs .row:only-child{margin:-.0625rem}.layout.gutter--xs .row:not(:only-child){margin:auto -.0625rem}.layout.gutter--xs :not(:only-child) .row:first-child{margin-top:-.0625rem}.layout.gutter--xs :not(:only-child) .row:last-child{margin-bottom:-.0625rem}.layout.gutter--xs .row .flex{padding:.0625rem}.layout.gutter--sm{padding:.25rem}.layout.gutter--sm .row:only-child{margin:-.125rem}.layout.gutter--sm .row:not(:only-child){margin:auto -.125rem}.layout.gutter--sm :not(:only-child) .row:first-child{margin-top:-.125rem}.layout.gutter--sm :not(:only-child) .row:last-child{margin-bottom:-.125rem}.layout.gutter--sm .row .flex{padding:.125rem}.layout.gutter--md{padding:.5rem}.layout.gutter--md .row:only-child{margin:-.25rem}.layout.gutter--md .row:not(:only-child){margin:auto -.25rem}.layout.gutter--md :not(:only-child) .row:first-child{margin-top:-.25rem}.layout.gutter--md :not(:only-child) .row:last-child{margin-bottom:-.25rem}.layout.gutter--md .row .flex{padding:.25rem}.layout.gutter--lg{padding:1rem}.layout.gutter--lg .row:only-child{margin:-.5rem}.layout.gutter--lg .row:not(:only-child){margin:auto -.5rem}.layout.gutter--lg :not(:only-child) .row:first-child{margin-top:-.5rem}.layout.gutter--lg :not(:only-child) .row:last-child{margin-bottom:-.5rem}.layout.gutter--lg .row .flex{padding:.5rem}.layout.gutter--xl{padding:1.5rem}.layout.gutter--xl .row:only-child{margin:-.75rem}.layout.gutter--xl .row:not(:only-child){margin:auto -.75rem}.layout.gutter--xl :not(:only-child) .row:first-child{margin-top:-.75rem}.layout.gutter--xl :not(:only-child) .row:last-child{margin-bottom:-.75rem}.layout.gutter--xl .row .flex{padding:.75rem}.row{display:flex;flex:1 1 auto;flex-wrap:wrap;min-width:0}.row.row{flex-direction:row}.row.row.reverse{flex-direction:row-reverse}.row.column{flex-direction:column}.row.column.reverse{flex-direction:column-reverse}.row.column>.flex{max-width:100%}.row.no-wrap{flex-wrap:nowrap}.flex-center{display:flex;justify-content:center;align-items:center}.flex>*{flex:1 1 auto}@media (min-width:0){.flex.xs1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order--xs1{order:1}.flex.offset--xs1{margin-left:8.3333333333%}.flex.xs2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order--xs2{order:2}.flex.offset--xs2{margin-left:16.6666666667%}.flex.xs3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order--xs3{order:3}.flex.offset--xs3{margin-left:25%}.flex.xs4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order--xs4{order:4}.flex.offset--xs4{margin-left:33.3333333333%}.flex.xs5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order--xs5{order:5}.flex.offset--xs5{margin-left:41.6666666667%}.flex.xs6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order--xs6{order:6}.flex.offset--xs6{margin-left:50%}.flex.xs7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order--xs7{order:7}.flex.offset--xs7{margin-left:58.3333333333%}.flex.xs8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order--xs8{order:8}.flex.offset--xs8{margin-left:66.6666666667%}.flex.xs9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order--xs9{order:9}.flex.offset--xs9{margin-left:75%}.flex.xs10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order--xs10{order:10}.flex.offset--xs10{margin-left:83.3333333333%}.flex.xs11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order--xs11{order:11}.flex.offset--xs11{margin-left:91.6666666667%}.flex.xs12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order--xs12{order:12}.flex.offset--xs12{margin-left:100%}}@media (min-width:576px){.flex.sm1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order--sm1{order:1}.flex.offset--sm1{margin-left:8.3333333333%}.flex.sm2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order--sm2{order:2}.flex.offset--sm2{margin-left:16.6666666667%}.flex.sm3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order--sm3{order:3}.flex.offset--sm3{margin-left:25%}.flex.sm4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order--sm4{order:4}.flex.offset--sm4{margin-left:33.3333333333%}.flex.sm5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order--sm5{order:5}.flex.offset--sm5{margin-left:41.6666666667%}.flex.sm6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order--sm6{order:6}.flex.offset--sm6{margin-left:50%}.flex.sm7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order--sm7{order:7}.flex.offset--sm7{margin-left:58.3333333333%}.flex.sm8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order--sm8{order:8}.flex.offset--sm8{margin-left:66.6666666667%}.flex.sm9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order--sm9{order:9}.flex.offset--sm9{margin-left:75%}.flex.sm10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order--sm10{order:10}.flex.offset--sm10{margin-left:83.3333333333%}.flex.sm11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order--sm11{order:11}.flex.offset--sm11{margin-left:91.6666666667%}.flex.sm12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order--sm12{order:12}.flex.offset--sm12{margin-left:100%}}@media (min-width:768px){.flex.md1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order--md1{order:1}.flex.offset--md1{margin-left:8.3333333333%}.flex.md2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order--md2{order:2}.flex.offset--md2{margin-left:16.6666666667%}.flex.md3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order--md3{order:3}.flex.offset--md3{margin-left:25%}.flex.md4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order--md4{order:4}.flex.offset--md4{margin-left:33.3333333333%}.flex.md5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order--md5{order:5}.flex.offset--md5{margin-left:41.6666666667%}.flex.md6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order--md6{order:6}.flex.offset--md6{margin-left:50%}.flex.md7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order--md7{order:7}.flex.offset--md7{margin-left:58.3333333333%}.flex.md8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order--md8{order:8}.flex.offset--md8{margin-left:66.6666666667%}.flex.md9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order--md9{order:9}.flex.offset--md9{margin-left:75%}.flex.md10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order--md10{order:10}.flex.offset--md10{margin-left:83.3333333333%}.flex.md11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order--md11{order:11}.flex.offset--md11{margin-left:91.6666666667%}.flex.md12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order--md12{order:12}.flex.offset--md12{margin-left:100%}}@media (min-width:992px){.flex.lg1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order--lg1{order:1}.flex.offset--lg1{margin-left:8.3333333333%}.flex.lg2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order--lg2{order:2}.flex.offset--lg2{margin-left:16.6666666667%}.flex.lg3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order--lg3{order:3}.flex.offset--lg3{margin-left:25%}.flex.lg4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order--lg4{order:4}.flex.offset--lg4{margin-left:33.3333333333%}.flex.lg5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order--lg5{order:5}.flex.offset--lg5{margin-left:41.6666666667%}.flex.lg6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order--lg6{order:6}.flex.offset--lg6{margin-left:50%}.flex.lg7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order--lg7{order:7}.flex.offset--lg7{margin-left:58.3333333333%}.flex.lg8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order--lg8{order:8}.flex.offset--lg8{margin-left:66.6666666667%}.flex.lg9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order--lg9{order:9}.flex.offset--lg9{margin-left:75%}.flex.lg10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order--lg10{order:10}.flex.offset--lg10{margin-left:83.3333333333%}.flex.lg11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order--lg11{order:11}.flex.offset--lg11{margin-left:91.6666666667%}.flex.lg12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order--lg12{order:12}.flex.offset--lg12{margin-left:100%}}@media (min-width:1200px){.flex.xl1{flex-basis:8.3333333333%;flex-grow:0;max-width:8.3333333333%}.flex.order--xl1{order:1}.flex.offset--xl1{margin-left:8.3333333333%}.flex.xl2{flex-basis:16.6666666667%;flex-grow:0;max-width:16.6666666667%}.flex.order--xl2{order:2}.flex.offset--xl2{margin-left:16.6666666667%}.flex.xl3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order--xl3{order:3}.flex.offset--xl3{margin-left:25%}.flex.xl4{flex-basis:33.3333333333%;flex-grow:0;max-width:33.3333333333%}.flex.order--xl4{order:4}.flex.offset--xl4{margin-left:33.3333333333%}.flex.xl5{flex-basis:41.6666666667%;flex-grow:0;max-width:41.6666666667%}.flex.order--xl5{order:5}.flex.offset--xl5{margin-left:41.6666666667%}.flex.xl6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order--xl6{order:6}.flex.offset--xl6{margin-left:50%}.flex.xl7{flex-basis:58.3333333333%;flex-grow:0;max-width:58.3333333333%}.flex.order--xl7{order:7}.flex.offset--xl7{margin-left:58.3333333333%}.flex.xl8{flex-basis:66.6666666667%;flex-grow:0;max-width:66.6666666667%}.flex.order--xl8{order:8}.flex.offset--xl8{margin-left:66.6666666667%}.flex.xl9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order--xl9{order:9}.flex.offset--xl9{margin-left:75%}.flex.xl10{flex-basis:83.3333333333%;flex-grow:0;max-width:83.3333333333%}.flex.order--xl10{order:10}.flex.offset--xl10{margin-left:83.3333333333%}.flex.xl11{flex-basis:91.6666666667%;flex-grow:0;max-width:91.6666666667%}.flex.order--xl11{order:11}.flex.offset--xl11{margin-left:91.6666666667%}.flex.xl12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order--xl12{order:12}.flex.offset--xl12{margin-left:100%}}.flex-nowrap{flex-wrap:nowrap}.align--start{align-items:flex-start}.align--end{align-items:flex-end}.align--center{align-items:center}.align--baseline{align-items:baseline}.align-self--start{align-self:flex-start}.align-self--end{align-self:flex-end}.align-self--center{align-self:center}.align-self--baseline{align-self:baseline}.align-content--start{align-content:flex-start}.align-content--end{align-content:flex-end}.align-content--center{align-content:center}.align-content--space-between{align-content:space-between}.align-content--space-around{align-content:space-around}.justify--start{justify-content:flex-start}.justify--end{justify-content:flex-end}.justify--center{justify-content:center}.justify--space-around{justify-content:space-around}.justify--space-between{justify-content:space-between}.justify--space-evenly{justify-content:space-evenly}.justify-self--start{justify-self:flex-start}.justify-self--end{justify-self:flex-end}.justify-self--center{justify-self:center}.justify-self--baseline{justify-self:baseline}.grow,.spacer{flex-grow:1!important}.grow{flex-shrink:0!important}.shrink{flex-grow:0!important;flex-shrink:1!important}.overflow--hidden{overflow:hidden!important}.overflow--visible{overflow:visible!important}.overflow-y{overflow-y:auto}.overflow-x{overflow-x:auto}.d-block{display:block!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.fill-height{height:100%}.ellipsis,.no-wrap{white-space:nowrap}.ellipsis{overflow:hidden;text-overflow:ellipsis}.ma-0,.mt-0,.my-0{margin-top:0!important}.ma-0,.mb-0,.my-0{margin-bottom:0!important}.ma-0,.mr-0,.mx-0{margin-right:0!important}.ma-0,.ml-0,.mx-0{margin-left:0!important}.ma-1,.mt-1,.my-1{margin-top:.25rem!important}.ma-1,.mb-1,.my-1{margin-bottom:.25rem!important}.ma-1,.mr-1,.mx-1{margin-right:.25rem!important}.ma-1,.ml-1,.mx-1{margin-left:.25rem!important}.ma-2,.mt-2,.my-2{margin-top:.5rem!important}.ma-2,.mb-2,.my-2{margin-bottom:.5rem!important}.ma-2,.mr-2,.mx-2{margin-right:.5rem!important}.ma-2,.ml-2,.mx-2{margin-left:.5rem!important}.ma-3,.mt-3,.my-3{margin-top:1rem!important}.ma-3,.mb-3,.my-3{margin-bottom:1rem!important}.ma-3,.mr-3,.mx-3{margin-right:1rem!important}.ma-3,.ml-3,.mx-3{margin-left:1rem!important}.ma-4,.mt-4,.my-4{margin-top:1.5rem!important}.ma-4,.mb-4,.my-4{margin-bottom:1.5rem!important}.ma-4,.mr-4,.mx-4{margin-right:1.5rem!important}.ma-4,.ml-4,.mx-4{margin-left:1.5rem!important}.ma-5,.mt-5,.my-5{margin-top:3rem!important}.ma-5,.mb-5,.my-5{margin-bottom:3rem!important}.ma-5,.mr-5,.mx-5{margin-right:3rem!important}.ma-5,.ml-5,.mx-5{margin-left:3rem!important}.ma-auto,.mt-auto,.my-auto{margin-top:auto!important}.ma-auto,.mr-auto,.mx-auto{margin-right:auto!important}.ma-auto,.mb-auto,.my-auto{margin-bottom:auto!important}.ma-auto,.ml-auto,.mx-auto{margin-left:auto!important}.pa-0,.pt-0,.py-0{padding-top:0!important}.pa-0,.pb-0,.py-0{padding-bottom:0!important}.pa-0,.pr-0,.px-0{padding-right:0!important}.pa-0,.pl-0,.px-0{padding-left:0!important}.pa-1,.pt-1,.py-1{padding-top:.25rem!important}.pa-1,.pb-1,.py-1{padding-bottom:.25rem!important}.pa-1,.pr-1,.px-1{padding-right:.25rem!important}.pa-1,.pl-1,.px-1{padding-left:.25rem!important}.pa-2,.pt-2,.py-2{padding-top:.5rem!important}.pa-2,.pb-2,.py-2{padding-bottom:.5rem!important}.pa-2,.pr-2,.px-2{padding-right:.5rem!important}.pa-2,.pl-2,.px-2{padding-left:.5rem!important}.pa-3,.pt-3,.py-3{padding-top:1rem!important}.pa-3,.pb-3,.py-3{padding-bottom:1rem!important}.pa-3,.pr-3,.px-3{padding-right:1rem!important}.pa-3,.pl-3,.px-3{padding-left:1rem!important}.pa-4,.pt-4,.py-4{padding-top:1.5rem!important}.pa-4,.pb-4,.py-4{padding-bottom:1.5rem!important}.pa-4,.pr-4,.px-4{padding-right:1.5rem!important}.pa-4,.pl-4,.px-4{padding-left:1.5rem!important}.pa-5,.pt-5,.py-5{padding-top:3rem!important}.pa-5,.pb-5,.py-5{padding-bottom:3rem!important}.pa-5,.pr-5,.px-5{padding-right:3rem!important}.pa-5,.pl-5,.px-5{padding-left:3rem!important}.pa-auto,.pt-auto,.py-auto{padding-top:auto!important}.pa-auto,.pr-auto,.px-auto{padding-right:auto!important}.pa-auto,.pb-auto,.py-auto{padding-bottom:auto!important}.pa-auto,.pl-auto,.px-auto{padding-left:auto!important}:root{--va-input-color:var(--va-background,#f5f9fb);--va-input-text-color:var(--va-dark,#262824);--va-input-scroll-color:var(--va-divided,#e1e9f8);--va-input-bordered-color:var(--va-divided,#e1e9f8);--va-input-border-width:1px;--va-input-border-radius:4px;--va-input-min-height:36px;--va-input-cursor:text;--va-input-success-color:var(--va-success);--va-input-success-background:#f1f7ee;--va-input-error-color:var(--va-danger);--va-input-error-background:#fdefef;--va-input-content-horizontal-padding:12px;--va-input-content-items-gap:6px;--va-input-line-height:20px;--va-input-font-size:1rem;--va-input-font-family:"Source Sans Pro",sans-serif;--va-input-font-weight:normal;--va-input-font-style:normal;--va-input-font-stretch:normal;--va-input-letter-spacing:normal;--va-input-placeholder-text-color:#bac2bb;--va-input-disabled-opacity:0.4;--va-input-container-label-max-width:calc(100% - 0.75rem);--va-input-container-label-color:#4ae387;--va-input-container-label-font-size:0.6rem;--va-input-container-label-letter-spacing:0.0375rem;--va-input-container-label-line-height:1.2;--va-input-container-label-font-weight:700;--va-input-container-label-text-transform:uppercase;--va-input-container-label-transform-origin:top left}.va-input{position:relative;display:flex;align-items:center;color:var(--va-input-text-color);cursor:var(--va-input-cursor)}.va-input_disabled{cursor:default;opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.va-input__container{display:flex;position:relative;align-items:center;width:100%;min-height:var(--va-input-min-height);border:var(--va-input-border-width) solid var(--va-input-color);overflow:hidden;padding:0 var(--va-input-content-horizontal-padding)}.va-input__container>*{padding-right:var(--va-input-content-items-gap);line-height:0}.va-input__container>:last-child{padding-right:0}.va-input__content-wrapper{display:flex;align-items:center;width:100%}.va-input__content-wrapper .va-input__content{width:100%;position:relative}.va-input__content-wrapper .va-input__content input{cursor:inherit}.va-input__content-wrapper .va-input__content__input{scrollbar-color:var(--va-input-scroll-color) transparent;scrollbar-width:thin;width:100%;min-height:var(--va-input-line-height);color:var(--va-input-text-color);background-color:transparent;border-style:none;outline:none;line-height:var(--va-input-line-height);font-size:var(--va-input-font-size);font-family:var(--va-input-font-family,var(--va-font-family));font-weight:var(--va-input-font-weight);font-style:var(--va-input-font-style);font-stretch:var(--va-input-font-stretch);letter-spacing:var(--va-input-letter-spacing);transform:translateY(-1px)}.va-input__content-wrapper .va-input__content__input::-webkit-scrollbar{width:4px}.va-input__content-wrapper .va-input__content__input::-webkit-scrollbar-track{box-shadow:none;border-radius:10px}.va-input__content-wrapper .va-input__content__input::-webkit-scrollbar-thumb{background:var(--va-input-scroll-color);opacity:.3;border-radius:2px}.va-input__content-wrapper .va-input__content__input::-moz-placeholder{color:var(--va-input-placeholder-text-color)}.va-input__content-wrapper .va-input__content__input:-ms-input-placeholder{color:var(--va-input-placeholder-text-color)}.va-input__content-wrapper .va-input__content__input::placeholder{color:var(--va-input-placeholder-text-color)}.va-input__content-wrapper .va-input__content__input:disabled{opacity:var(--va-input-disabled-opacity)}.va-input__icons{display:flex;align-items:center;justify-content:center}.va-input__icons>*{margin-right:calc(var(--va-input-content-items-gap)/4)}.va-input__icons>:last-child{margin-right:0}.va-input textarea{margin:12px 0;resize:vertical}.va-input_labeled .va-input__content-wrapper{padding-top:12px;height:100%;align-items:flex-end}.va-input_labeled .va-input__label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:12px;transform:translateY(-100%);position:absolute;display:block;left:0;top:0;padding-top:1px;max-width:var(--va-input-container-label-max-width);color:var(--va-input-container-label-color);font-size:var(--va-input-container-label-font-size);letter-spacing:var(--va-input-container-label-letter-spacing,var(--va-letter-spacing));line-height:var(--va-input-container-label-line-height);font-weight:var(--va-input-container-label-font-weight);text-transform:var(--va-input-container-label-text-transform);transform-origin:top left}.va-input_labeled textarea{margin-top:0}.va-input_solid .va-input__container{background:var(--va-input-color);border-color:var(--va-input-color);border-radius:var(--va-input-border-radius)}.va-input_solid.va-input_success .va-input__container{background:var(--va-input-success-background);border-color:var(--va-input-success-color)}.va-input_solid.va-input_error .va-input__container{background:var(--va-input-error-background);border-color:var(--va-input-error-color)}.va-input_outline .va-input__container{border-radius:0;border-color:var(--va-input-bordered-color)}.va-input_outline.va-input_success .va-input__container{background:var(--va-input-success-background);border-color:var(--va-input-success-color)}.va-input_outline.va-input_error .va-input__container{background:var(--va-input-error-background);border-color:var(--va-input-error-color)}.va-input_bordered__border{position:absolute;height:0;border-bottom:var(--va-input-border-width) solid;border-color:var(--va-input-bordered-color);width:100%;bottom:0}.va-input_bordered .va-input__container{background:var(--va-input-color);border-top-left-radius:var(--va-input-border-radius);border-top-right-radius:var(--va-input-border-radius);border-color:transparent!important}.va-input_bordered.va-input_success .va-input__container{background:var(--va-input-success-background)}.va-input_bordered.va-input_success .va-input_bordered__border{border-color:var(--va-input-success-color)}.va-input_bordered.va-input_error .va-input__container{background:var(--va-input-error-background)}.va-input_bordered.va-input_error .va-input_bordered__border{border-color:var(--va-input-error-color)}';e(r);export default r;
//# sourceMappingURL=VaInput.vue_vue&type=style&index=0&id=db73a230&lang.css.js.map
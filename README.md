# Ngx Light Pagination - by Arghyadeep 

&middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/argodeep/Ngx-Light-Pagination/blob/master/LICENSE) [![npm version](https://img.shields.io/badge/npm-v1.0.5-blue)](https://www.npmjs.com/package/ngx-light-pagination)

This is a light weight pagination library built for angular 2+ versions. Less than 15 kb, No Dependencies. This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.11. Most likely it will work with angular 5, 6, 7, 8. Please [open an issue](https://github.com/argodeep/Ngx-Light-Pagination/issues/new/choose) if you face any bug.

## Features

- Light weight **only 12.8kb**.
- **No Major Dependencies** expect angular browser, core & tslib.
- Supports **prev, next and select page events**.
- Neat & Clean UI.
- 5 points pagination.
- **Fast loading**.
- Intelligent multi color sensing.
- **Dark & Light color theme** supported.
- Custom Style Support will be added soon [Coming Soon]
- 2 More design will be added soon [Coming Soon]

## Demo

![ngx-light-pagination-banner](https://raw.githubusercontent.com/argodeep/Ngx-Light-Pagination/master/ngx-light-pagination.png)

### [View Demo](https://argodeep.github.io/Ngx-Light-Pagination/)

## Install

1. For Installation `npm install --save ngx-light-pagination`.
2. Import ngx light pagination module `import { NgxLightPaginationModule } from 'ngx-light-pagination';` and then `imports: [... NgxLightPaginationModule ]`.
3. Ngx light pagination supports two property binding `[color]` and `[paginationData]`. 
4. You can pass your brand's website/application color `[color]="themeColor"` or `color="#ff0000"`.
5. To pass the pagination data you need to use this binding `[paginationData]="paginationMeta"`.
6. `paginationMeta` should have `perPageItem: number; totalItem: number; currentPage: number; totalPage: number`.
7. Example of `paginationMeta` looks like.
    `this.paginationMeta = {`
    `perPageItem: 5,`
   `totalItem: 50,`
   `currentPage: 3,`
    `totalPage: 10}`
8. Ngx light pagination supports 3 event types - Next page, Previous Page, Any Selected Page. To use the event binding see this part `(onPageChange)="paginationEvents($event)"`. 
9. Emitted event returns an object with Type & Data. Example: Type: 'Previous Page' & Data: 1. Here 1 is the previous page number where user want to go.
8. Complete HTML template example to use for pagination. `<ngx-light-pagination [color]="themeColor" [paginationData]="paginationMeta" (onPageChange)="paginationEvents($event)"></ngx-light-pagination>`.


**Note:** You can change the variable names as you wish.

## Further help

To get more help [Open Issue](https://github.com/argodeep/Ngx-Light-Pagination/issues/new/choose).
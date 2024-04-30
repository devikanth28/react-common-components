import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";

// to handle css files
import postcss from "rollup-plugin-postcss";

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from "@rollup/plugin-commonjs";
import terser from '@rollup/plugin-terser';
/* import analyze from 'rollup-plugin-analyzer';
 */

const pluginsArray = [
    json(),
    peerDepsExternal(),
    resolve({ browser: true }),
    postcss({
        minimize: true
    }),
    babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
    }),
    commonjs({
        transformMixedEsModules: true
    }),
    terser()

    /* ,
    analyze({summaryOnly : true}) */
]

export default [
    {
        input: {
            DataGrid: './src/DataGrid/index.js',
            DatePicker: './src/DatePicker/CommonDatePicker.js',
            DynamicForm: './src/DynamicForm/index.js',
            Pagination: './src/Pagination/Pagination.js',
            LocalitySearchComponent: './src/LocalityComponent/components/LocalitySearchComponent.js',
            DocumentScan: './src/DocumentScan/DocumentScan.js',
            DocumentUpload: './src/DocumentUpload/DocumentUpload.js',
            SaveSearch: './src/SaveSearch/SaveSearch.js',
            DbReport: './src/DbReport/index.js',
            CopyText: './src/CopyText/CopyText.js',
            SearchNow: './src/SearchNow/SearchNow.js',
            BarGraph: './src/BarGraph/BarGraph.js',
            CustomDataList:'./src/CustomDataList/CustomDataList.js',
            UserBrowserInfo:'./src/UserBrowserInfo/UserBrowserInfo.js'
        },
        output: [

            {
                dir: 'dist/esm/',
                format: "es",
                sourcemap: true
            } /* ,
            {
                file : 'dist/cjs/DataGrid/index.cjs',
                format : 'cjs',
                sourcemap :true
            }, 
             */

        ],
        plugins: [
            ...pluginsArray
        ],
    },
    {
        input: {
            CommonCss: 'src/CommonCss/page-component.js',
        },
        output: [
            {
                dir: "dist/esm/styles"
            }
        ],
        plugins: [
            postcss({
                extract: true,
                use: ['sass']
            }),
        ],


    }


];

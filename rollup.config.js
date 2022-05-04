export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/ng.sails.umd.js',
    sourceMap: true,
    format: 'umd',
    moduleName: 'ng.amazing',
    external: [
        '@angular/core',
        'tslib',
        'sails.io.js',
        'socket.io-client',
        'rxjs',
        'rxjs/operators',
        'json-object-mapper',
        'rxjs/add/operator/map'
    ],
    globals: {
        '@angular/core': 'ng.core',
        'rxjs/Observable': 'Rx',
        'rxjs/ReplaySubject': 'Rx',
        'rxjs/add/operator/map': 'Rx.Observable.prototype',
        'rxjs/add/operator/filter': 'Rx.Observable.prototype',
        'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
        'rxjs/add/operator/merge': 'Rx.Observable.prototype',
        'rxjs/add/operator/switchMap': 'Rx.Observable.prototype',
        'rxjs/add/operator/switch': 'Rx.Observable.prototype',
        'rxjs/add/observable/fromEvent': 'Rx.Observable',
        'rxjs/add/observable/of': 'Rx.Observable'
    }
}
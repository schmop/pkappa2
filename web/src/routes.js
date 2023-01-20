import {createRouter, createWebHistory} from 'vue-router';

import Base from './components/Base';
import Home from './components/Home';
import Status from './components/Status';
import Pcaps from './components/Pcaps';
import Tags from './components/Tags';
import Graph from './components/Graph';
import Results from './components/Results';
import Stream from './components/Stream';

export default createRouter({
    history: createWebHistory(),
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: Base,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: Home,
                },
                {
                    path: 'status',
                    name: 'status',
                    component: Status,
                },
                {
                    path: 'pcaps',
                    name: 'pcaps',
                    component: Pcaps,
                },
                {
                    path: 'tags',
                    name: 'tags',
                    component: Tags,
                },
                {
                    path: 'graph',
                    name: 'graph',
                    component: Graph,
                    props: route => ({ searchTerm: route.query.q })
                },
                {
                    path: 'search',
                    name: 'search',
                    component: Results,
                    props: route => ({ searchTerm: route.query.q, searchPage: route.query.p })
                },
                {
                    path: 'stream/:streamId(\\d+)',
                    name: 'stream',
                    component: Stream,
                    props: route => ({ searchTerm: route.query.q, searchPage: route.query.p })
                },
            ],
        },
    ]
});

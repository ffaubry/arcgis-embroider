import Application from 'jsapi-embroider/app';
import config from 'jsapi-embroider/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();

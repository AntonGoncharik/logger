# Logger for Node.js

## 📦 Install

`npm install @anton.goncharik/logger`

`yarn add @anton.goncharik/logger`

https://github.com/AntonGoncharik/logger

## 🔨 API

##### Logger

`import Logger from '@anton.goncharik/logger';`

##### Logger methods

`1. Logger.journal();` - return Journal class

##### Journal

`const Journal = Logger.journal();`

`export const server = new Journal(name: string, {dirname: string, file: boolean});` - create new Journal object

name - your process name
dirname - path for folding logs
file - flag to write to file

##### Journal methods

`1. journal.error('Your message');`

`3. journal.warn('Your message');`

`4. journal.info('Your message');`

`5. journal.trace('Your message');`

`6. journal.debug('Your message');`

`7. journal.log('Your message');`

## 🔨 Example

#### CommonJS

##### Module logger

`const Logger = require('@anton.goncharik/logger');`

`const Journal = Logger.journal();`

`module.exports.server = new Journal('server', {dirname: 'logs/server', file: true});`

`module.exports.controller = new Journal('controller', {dirname: 'logs/controller', file: false});`

##### Some module

`import { server as journal } from 'your path module logger';`

`journal.info('Your message');`

#### ES6

##### Module logger

`import Logger from '@anton.goncharik/logger';`

`const Journal = Logger.journal();`

`export const server = new Journal('server', {dirname: 'logs/server', file: true});`

`export const controller = new Journal('controller', {dirname: 'logs/controller', file: false});`

##### Some module

`import { controller as journal } from 'your path module logger';`

`controller.error('Your message');`

#### Output format

##### [MESSAGE LEVEL] - [Name] - [Date]

##### << Message >>

#

#### Output example

##### [INFO] - [server] - [2021-12-26T21:16:17.684Z]

##### << Database has being connected >>

## TypeScript

`@anton.goncharik/logger` is written in TypeScript with complete definitions.

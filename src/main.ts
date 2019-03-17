import { Generate } from './generate'

const generator = new Generate()

const cos = (): any => generator.getRhymeWord('please')

cos().then(console.log())
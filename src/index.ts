import { createInstance } from '@module-federation/enhanced/runtime';
import { federation } from '@module-federation/vite';


// Third-parties

export const paris = federation;

export const createParis = createInstance;


export { createInstance };

export default paris;

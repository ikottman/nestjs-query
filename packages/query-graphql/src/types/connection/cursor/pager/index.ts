import { Pager } from './interfaces';
import { CursorPager } from './limit-offset.pager';

export { Pager, PagerResult, CountFn } from './interfaces';

// default pager factory to plug in addition paging strategies later on.
export const createPager = <DTO>(): Pager<DTO> => new CursorPager<DTO>();

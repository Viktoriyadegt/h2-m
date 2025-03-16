import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination, Stack} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage)
    // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: any, page: number) => {
        onChange(page, itemsCountForPage)
        // пишет студент
    }

    const onChangeSelect = (event: any) => {
        onChange(page, +event.currentTarget.value)
        // пишет студент
    }

    return (
        <div className={s.pagination}>
            <Stack spacing={2}>
                <Pagination
                    id={id + '-pagination'}
                    //sx={{width:'24',  height:'24'}}
                    // стили для Pagination // пишет студент
                    size={'small'}
                    page={page}
                    count={lastPage}
                    shape="rounded"
                    onChange={onChangeCallback}
                    color={"primary"}
                    hideNextButton
                    hidePrevButton
                />
            </Stack>

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination

import { HTMLProps } from "react"
import { useStateObj } from "@shared/lib"
import styles from './FDatePicker.module.scss'
import dayjs from 'dayjs'

type FDatePickerProps = HTMLProps<HTMLDivElement>

export const FDatePicker = (props: FDatePickerProps) => {
  const pickerState = useStateObj<'date' | 'month' | 'year'>('date')

  const pageMonth = useStateObj(dayjs().startOf('M').startOf('d'))
  const pageYear = useStateObj(dayjs().startOf('y').startOf('d'))
  const selected = useStateObj(dayjs().startOf('d'))
  const action = {
    moveLeft: () => {
      switch (pickerState.value) {
        case 'date':
          pageMonth.setValue(prev => prev.subtract(1, 'M'));
          break;
        case 'month':
          break;
        case 'year':
          pageYear.setValue(prev => prev.subtract(18, 'y'))
      }
    },
    moveRight: () => {
      switch (pickerState.value) {
        case 'date':
          pageMonth.setValue(prev => prev.add(1, 'M'));
          break;
        case 'month':
          break;
        case 'year':
          pageYear.setValue(prev => prev.add(18, 'y'))
      }
    },
    changeMonth: (month: number) => {
      pageMonth.setValue(prev => {
        const newPage = prev.set('M', month).startOf('M');
        pickerState.setValue('date');
        return newPage
      })
    },
    changeYear: (year: number) => {
      pageYear.setValue(prev => {
        const newPage = prev.set('y', year).set('M', pageMonth.value.get('M')).startOf('M');
        pickerState.setValue('date');
        return newPage;
      })
    }
  }
  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <div className={styles['header']}>
        <button onClick={action.moveLeft} className={styles['arrow'] + ' ' + (pickerState.value === 'month' ? styles['disabled'] : '')}>{'<'}</button>
        {pickerState.value === 'date' &&
          <div className={styles['month-year']}>
            <div className={styles['month']} onClick={() => pickerState.setValue('month')}>{pageMonth.value.format('MMMM')}</div>
            <div className={styles['year']} onClick={() => pickerState.setValue('year')}>{pageYear.value.format('YYYY')}</div>
          </div>
        }
        {pickerState.value !== 'date' &&
          <div className={styles['ok-button']} onClick={() => pickerState.setValue('date')}>
            Back
          </div>
        }
        <button onClick={action.moveRight} className={styles['arrow'] + ' ' + (pickerState.value === 'month' ? styles['disabled'] : '')}>{'>'}</button>
      </div>
      {/* <div className={styles['day-names-row']}>
        {[...Array(7)].map((v, i) => (
          <div key={i}>{pageDate.value.add(i, 'd').format('dd')}</div>
        ))}
      </div> */}
      <div className={styles['pick-area']}>
        {pickerState.value === 'date' &&
          <div className={styles['page-days']}>
            {(() => {
              const prevDaysCount = pageMonth.value.get('d')
              const daysInMonth = pageMonth.value.daysInMonth()
              // Math.ceil((prevDaysCount + daysInMonth) / 7) * 7)
              return [...Array(42)].map((_v, i) => {
                const date = pageMonth.value.subtract(prevDaysCount, 'd').add(i, 'd').set('y', pageYear.value.get('y'))
                return (
                  <div className={styles['day'] + ' ' + (date.isSame(selected.value) ? styles['active'] : '') + ' ' + ((i < prevDaysCount || i - prevDaysCount + 1 > daysInMonth) ? styles['excluded-day'] : '')} onClick={() => selected.setValue(date)}>
                    {date.get('D')}
                  </div>
                )
              })
            })()}
          </div>
        }
        {pickerState.value === 'month' &&
          <div className={styles['months']}>
            {[...Array(12)].map((v, index) => (
              <div className={styles['month'] + ' ' + (selected.value.get('month') === index ? styles['active'] : '') + ' ' + (pageMonth.value.get('month') === index ? styles['visible-now'] : '')} onClick={() => action.changeMonth(index)}>
                {dayjs(0).set('M', index).format('MMMM')}
              </div>
            ))}
          </div>
        }
        {pickerState.value === 'year' &&
          <div className={styles['years']}>
            {[...Array(18)].map((v, index) => {
              const year = Math.floor(pageYear.value.get('year') / 18) * 18 + index;
              return (
                <div className={styles['year'] + ' ' + (selected.value.get('year') === year ? styles['active'] : '') + ' ' + (pageYear.value.get('year') === year ? styles['visible-now'] : '')} onClick={() => action.changeYear(year)}>
                  {year}
                </div>
              )
            })}
          </div>
        }
      </div>
      <div>{selected.value.format('DD.MM.YYYY')}</div>
    </div>
  )
}

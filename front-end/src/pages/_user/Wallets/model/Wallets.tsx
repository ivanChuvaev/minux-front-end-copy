import { FButton, FQuadContainer, FTextInput } from "@shared/ui";
import { HTMLProps } from "react";
import editIcon from '@shared/images/edit-icon.svg'
import deleteIcon from '@shared/images/delete-icon.svg'
import styles from './Wallets.module.scss'

const dummy: Array<{coin: string, fullName: string, source: string, address: string}> = [
  {
    coin: 'RVN',
    fullName: 'Raven',
    source: 'Bybit BYBIT RAVEN',
    address: 'RaevHcLsakdshiu4584ASddsa2dab5vd5g425sd4f'
  },
  {
    coin: 'RVN',
    fullName: 'Raven',
    source: 'Bybit BYBIT RAVEN',
    address: 'RaevHcLsakdshiu4584ASddsa2dab5vd5g425sd4f'
  },
  {
    coin: 'RVN',
    fullName: 'Raven',
    source: 'Bybit BYBIT RAVEN',
    address: 'RaevHcLsakdshiu4584ASddsa2dab5vd5g425sd4f'
  },
  {
    coin: 'RVN',
    fullName: 'Raven',
    source: 'Bybit BYBIT RAVEN',
    address: 'RaevHcLsakdshiu4584ASddsa2dab5vd5g425sd4f'
  }
]

export const Wallets = (props: HTMLProps<HTMLDivElement>) => {
  const data = dummy;

  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <FQuadContainer filled className={styles['table-wrapper-wrapper']} bodyProps={{ className: styles['table-wrapper']}}>
        <table>
          <thead>
              <th>Coin</th>
              <th>Full Name</th>
              <th>Source</th>
              <th>Address</th>
              <th></th>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.address}>
                <td>{item.coin}</td>
                <td>{item.fullName}</td>
                <td>{item.source}</td>
                <td>{item.address}</td>
                <td className={styles['actions']}>
                  <img src={editIcon} alt="edit" />
                  <img src={deleteIcon} alt="delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </FQuadContainer>
      <FButton severity='good' className="self-end">Add new</FButton>
      <FQuadContainer filled className={styles['new-address-wrapper']}>
        <FTextInput title="New Address" />
      </FQuadContainer>
      <div className="self-end flex gap-10">
        <FButton severity="bad">Reset</FButton>
        <FButton severity="good">Add</FButton>
      </div>
    </div>
  )
}

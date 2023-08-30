import { TWalletFilled } from "@shared/types"
import { HTMLProps } from "react"
import { deleteWallet } from "../api"
import { useBoolean } from "usehooks-ts"
import editIcon from '@shared/images/edit-icon.svg'
import deleteIcon from '@shared/images/delete-icon.svg'
import styles from './WalletList.module.scss'
import _ from 'lodash'

const omittedProps = [
  'item'
] as const

type WalletListItemProps = Omit<HTMLProps<HTMLTableRowElement>, typeof omittedProps[number]> & {
  item: TWalletFilled
  onUpdate?: () => void
}

export const WalletListItem = (props: WalletListItemProps) => {
  const isDeleting = useBoolean(false);

  const action = {
    delete: () => {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('are you sure you want to delete wallet?')) {
        isDeleting.setTrue();
        deleteWallet({ walletId: props.item.id }).then(res => {
          if (props.onUpdate !== undefined) props.onUpdate();
        }).catch(e => {
          alert(e.message)
        }).finally(() => {
          isDeleting.setFalse();
        })
      }
    }
  }
  return (
    <tr {..._.omit(props, omittedProps)} className={styles['wrapper-item'] + ' ' + (isDeleting.value ? styles['deleting'] : '')}>
      <td>{props.item.cryptocurrency.name}</td>
      <td>{props.item.name}</td>
      <td>{props.item.source}</td>
      <td>{props.item.address}</td>
      <td className={styles['actions']}>
        <img src={editIcon} alt="edit" />
        <img src={deleteIcon} alt="delete" onClick={action.delete} />
      </td>
    </tr>
  )
}

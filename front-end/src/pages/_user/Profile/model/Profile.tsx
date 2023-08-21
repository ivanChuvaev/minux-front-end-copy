import { HTMLProps } from "react";
import styles from './Profile.module.scss'
import { FButton, FQuadContainer, FTextInput } from "@shared/ui";
import { useStateObj } from "@shared/lib";

export const Profile = (props: HTMLProps<HTMLDivElement>) => {

  const state = {
    oldPassword: useStateObj(''),
    newPassword: useStateObj(''),
    newName: useStateObj('')
  }

  const action = {
    resetPassword: () => {
      state.oldPassword.setValue('');
      state.newPassword.setValue('');
    },
    applyPassword: () => {
      alert('cannot change password, not implemented')
    },
    resetName: () => {
      state.newName.setValue('');
    },
    applyName: () => {
      alert('cannot change name, not implemented')
    }
  }

  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <FQuadContainer filled visibility={{ ll: false, rl: false }} className={styles['password']} bodyProps={{ className: styles['password-inner']}}>
        <div className={styles['password-inner-inner']}>
          <span>Change password</span>
          <div className={styles['fields']}>
            <FTextInput title="Old password" value={state.oldPassword.value} onChange={state.oldPassword.setValue} />
            <FTextInput title="New password" value={state.newPassword.value} onChange={state.newPassword.setValue} />
          </div>
          <div className={styles['buttons']}>
            <FButton severity='bad' onClick={action.resetPassword}>Reset</FButton>
            <FButton severity='good' onClick={action.applyPassword}>Apply</FButton>
          </div>
        </div>
      </FQuadContainer>
      <FQuadContainer filled visibility={{ ll: false, rl: false }} className={styles['name']} bodyProps={{ className: styles['name-inner']}}>
        <div className={styles['name-inner-inner']}>
          <span>Change name</span>
          <FTextInput title="New name" value={state.newName.value} onChange={state.newName.setValue} />
          <div className={styles['buttons']}>
            <FButton severity='bad' onClick={action.resetName}>Reset</FButton>
            <FButton severity='good' onClick={action.applyName}>Apply</FButton>
          </div>
        </div>
      </FQuadContainer>
    </div>
  )
}

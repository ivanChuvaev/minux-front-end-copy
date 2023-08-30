import { HTMLProps } from "react";
import { FButton, FQuadContainer, FTextInput } from "@shared/ui";
import { useStateObj } from "@shared/lib";
import { useBoolean } from "usehooks-ts";
import { updateName, updatePassword } from "../api";
import styles from './Profile.module.scss'

export const Profile = (props: HTMLProps<HTMLDivElement>) => {

  const state = {
    oldPassword: useStateObj(''),
    newPassword: useStateObj(''),
    newName: useStateObj(''),
    isUpdatingPassword: useBoolean(false),
    isUpdatingName: useBoolean(false)
  }

  const action = {
    resetPassword: () => {
      state.oldPassword.setValue('');
      state.newPassword.setValue('');
    },
    applyPassword: () => {
      if (state.oldPassword.value === '') { alert('old password must be entered'); return }
      if (state.newPassword.value === '') { alert('new password must be entered'); return }
      state.isUpdatingPassword.setTrue();
      updatePassword({
        oldPassword: state.oldPassword.value,
        newPassword: state.newPassword.value
      }).then(res => {
        action.resetPassword()
      }).catch(e => {
        alert(e.message);
      }).finally(() => {
        state.isUpdatingPassword.setFalse();
      })
    },
    resetName: () => {
      state.newName.setValue('');
    },
    applyName: () => {
      if (state.newName.value === '') { alert('new name must be entered'); return }
      state.isUpdatingName.setTrue();
      updateName({
        name: state.newName.value
      }).then(res => {
        action.resetName()
      }).catch(e => {
        alert(e.message);
      }).finally(() => {
        state.isUpdatingName.setFalse();
      })
    }
  }

  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <FQuadContainer filled visibility={{ ll: false, rl: false }} className={styles['password']} bodyProps={{ className: styles['password-inner']}}>
        <div className={styles['password-inner-inner']}>
          <span>Change password</span>
            <FTextInput title="Old password" value={state.oldPassword.value} onChange={state.oldPassword.setValue} />
            <FTextInput title="New password" value={state.newPassword.value} onChange={state.newPassword.setValue} />
            <div className={styles['buttons']}>
              <FButton severity='bad' onClick={action.resetPassword}>Reset</FButton>
              <FButton severity='good' loading={state.isUpdatingPassword.value} onClick={action.applyPassword}>Apply</FButton>
            </div>
        </div>
      </FQuadContainer>
      <FQuadContainer filled visibility={{ ll: false, rl: false }} className={styles['name']} bodyProps={{ className: styles['name-inner']}}>
        <div className={styles['name-inner-inner']}>
          <span>Change name</span>
          <FTextInput title="New name" value={state.newName.value} onChange={state.newName.setValue} />
          <div className={styles['buttons']}>
            <FButton severity='bad' onClick={action.resetName}>Reset</FButton>
            <FButton severity='good' loading={state.isUpdatingName.value} onClick={action.applyName}>Apply</FButton>
          </div>
        </div>
      </FQuadContainer>
    </div>
  )
}

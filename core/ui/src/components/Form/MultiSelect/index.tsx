/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { LabelHTMLAttributes } from 'react'
import ReactSelect, { GroupBase, Props } from 'react-select'
import Container from './styles'
/* global HTMLLabelElement */
interface ISelectProps<O, M extends boolean = false, T extends GroupBase<O> = GroupBase<O>>
  extends Props<O, M, T> {
    label?:string;
    labelPosition?:'Top'|'Bottom'|'Left'|'Right',
    labelOptions?:LabelHTMLAttributes<HTMLLabelElement>
}

export const MultiSelect = <
Option,
IsMulti extends boolean = true,
Group extends GroupBase<Option> = GroupBase<Option>
> ({
    label,
    labelPosition,
    labelOptions,
    ...rest
  }: ISelectProps<Option, IsMulti, Group>) => {
  return (
      <Container labelPosition={labelPosition}>
        {label &&
        <label {...labelOptions}>{label}</label>
        }
        <ReactSelect
      options={[{ value: 'teste', label: 'teste' }]}
      isMulti={true as IsMulti}
      components={{
        IndicatorsContainer: props => <div style={{ marginRight: '8px' }} {...props}><svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M8 0H0L4 4L8 0Z" fill="black"/>
        </svg></div>

      }}
        styles={{
          indicatorSeparator: () => ({
            display: 'none'
          }),
          multiValue: props => ({
            ...props,
            background: '#D9D9D9',
            borderRadius: '3px'
          }),

          input: props => ({
            ...props,
            padding: 0,
            margin: 0
          }),
          placeholder: props => ({
            ...props,
            fontSize: '15px',
            color: '#55514F',
            fontFamily: 'Ubuntu',
            fontWeight: 400
          }),
          singleValue: props => ({
            ...props,
            fontSize: '14px',
            border: 0

          }),
          container: props => ({
            ...props,
            width: '100%',
            borderRadius: '5px',
            borderColor: '#929292',
            cursor: 'pointer',
            height: '31px'

          }),
          control: (props, { menuIsOpen }) => {
            return {
              ...props,
              cursor: 'pointer',
              border: '1px solid #929292',
              background: '#FCFCFC',
              boxShadow: '0px 1px 0px rgba(255, 255, 255, 0.85), inset 0px 1px 0px 1px rgba(0, 0, 0, 0.06)',
              borderRadius: '5px'
            // background: theme.colors.white,
            }
          },
          valueContainer: props => ({
            ...props,
            cursor: 'pointer',
            paddingTop: 0,
            border: 0,
            paddingBottom: 0
          }),
          menuList: props => ({
            ...props,
            width: '100%',
            border: 0
          }),
          menu: props => ({
            ...props,
            width: '100%',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
          }),
          option: (props, { isSelected }) => ({
            ...props,
            fontSize: '15px',
            background: isSelected ? 'linear-gradient(180deg, #ED9666 0%, #F38B6B 100%)' : '#F5F5F5',
            color: isSelected ? '#fff' : '#55514F',
            textShadow: isSelected ? '0px -1px 0px rgba(0, 0, 0, 0.1)' : '',
            border: isSelected ? '1px solid #DB815D' : ''

          }),
          clearIndicator: props => ({
            ...props,
            cursor: 'pointer',
            margin: '0 15px 0 0'
          })

        }}
      />
      </Container>
  )
}

import React, { memo, useState } from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { OptionUnstyled, optionUnstyledClasses, PopperUnstyled, SelectUnstyled, selectUnstyledClasses } from '@mui/base';
import { styled } from '@mui/system';


function SelectItem({ options, width }) {
  const [value, setValue] = useState()
  // console.log("select item")
  const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  };

  const StyledButton = styled('button')(`
        position: relative;
        font-size: 0.875rem;
        box-sizing: border-box;
        max-height: calc(1em + 22px);
        min-width: ${`${width}px`};
        background: #fff;
        border: 1px solid ${grey[300]};
        border-radius: 10px;
        margin: 0 auto;
        padding: 5px 10px;
        text-align: left;
        line-height: 1.5;
        white-space: nowrap;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: start;
        color: ${grey[700]};
        z-index: 2;
      
        &:hover {
          background: ${grey[100]};
          border-color: ${grey[400]};
        }
      
        &.${selectUnstyledClasses.focusVisible} {
          outline: 3px solid ${blue[100]};
        }
      
        &.${selectUnstyledClasses.expanded} {
          &::after {
            content: '▴';
          }
        }
      
        &::after {
          content: '▾';
          position: absolute;
          top: 5px;
          right: 10px;
        }
        `,
  );

  const StyledListbox = styled('ul')(`
            position: static;
            font-size: 0.875rem;
            box-sizing: border-box;
            padding: 5px;
            margin: 5px 0;
            min-width: 140px;
            height: auto;
            background-color: #fff;
            border: 1px solid ${grey[300]};
            border-radius: 10px;
            color: ${grey[900]};
            overflow: auto; 
            outline: 0px;
            z-index: 100;
            word-break: break-word;
            text-overflow: ellipsis;
            `,
  );

  const StyledOption = styled(OptionUnstyled)(`
            list-style: none;
            padding: 5px;
            margin: 0;
            border-radius: 10px;
            cursor: pointer;
            width: 100%;
            &:last-of-type {
              border-bottom: none;
            }
          
            &.${optionUnstyledClasses.selected} {
              background-color: ${blue[100]};
              color: ${blue[900]};
            }
          
            &.${optionUnstyledClasses.highlighted} {
              background-color: ${grey[100]};
              color: ${grey[900]};
            }
          
            &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
              background-color: ${blue[100]};
              color: ${blue[900]};
            }
          
            &.${optionUnstyledClasses.disabled} {
              color: ${grey[400]};
            }
          
            &:hover:not(.${optionUnstyledClasses.disabled}) {
              background-color: ${grey[100]};
              color: ${grey[900]};
            }
            `,
  );

  const StyledPopper = styled(PopperUnstyled)`
        z-index: 100;
    `;

  function CustomSelect(props) {
    const components = {
      Root: StyledButton,
      Listbox: StyledListbox,
      Popper: StyledPopper,
      ...props.components,
    };
    return <SelectUnstyled {...props} components={components} />;
  }

  CustomSelect.propTypes = {
    /**
     * The components used for each slot inside the Select.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components: PropTypes.shape({
      Listbox: PropTypes.elementType,
      Popper: PropTypes.func,
      Root: PropTypes.elementType,
    }),
  };



  return (
    <CustomSelect defaultValue={options[0].name}
      value={value}
      onChange={setValue}
    >
      {options.map((item, id) => {
        const { name } = item;
        return <StyledOption key={id} value={name}>{name}</StyledOption>
      })}
    </CustomSelect>
  )
}

export default memo(SelectItem)
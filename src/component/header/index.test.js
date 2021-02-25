import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import {findByTestAttr} from '../../utils/index';

const setUp=(props={})=>{
   const component=shallow(<Header {...props}/>);
   return component;
}


describe('Header component',()=>{
    let component = beforeEach(()=>{
        component=setUp();
    });
    it('should render without errors',()=>{
       const wrapper =findByTestAttr(component,'headercomponent');
       expect(wrapper.length).toBe(1);
    })

    it('should render logo',()=>{
       const wrapper =findByTestAttr(component,'imgclass');
       expect(wrapper.length).toBe(1);
    });
});
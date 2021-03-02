import React  from 'react';
import {shallow} from 'enzyme';
import Headline from './index';
//import findByTestAttr from './../../utils/index';
import {findByTestAttr} from './../../utils/index'

const setUp=(props={})=>{
  const component=shallow(<Headline {...props}/>);
  return component;
}

describe('Headline component',()=>{
    describe('Have props',()=>{
        let wrapper;
        beforeEach(()=>{
            const props={
                header:'test header',
                desc :'test description'
            }
            wrapper=setUp(props);
        });

        it('should render without error',()=>{
            const component=findByTestAttr(wrapper,'HedlineComponent');
            expect(component.length).toBe(1);
        });

        it('should render h1',()=>{
            const h1=findByTestAttr(wrapper,'h1');
            expect(h1.length).toBe(1);
        });

        it('should render desc',()=>{
            const desc=findByTestAttr(wrapper,'desc');
            expect(desc.length).toBe(1);
        })

    })

    describe('Have no props',()=>{
       let wrapper;
       beforeEach(()=>{
           wrapper=setUp();
       })

       it('should not render',()=>{
           const component=findByTestAttr(wrapper,'HedlineComponent');
           expect(component.length).toBe(0);
       });

    })
})




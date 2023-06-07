import React from 'react'

export default function Alert(props) {
    const captilize=(word)=>{
      const lower = word.toLowerCase();
      return lower.charAt(0).toupperCase() + lower.slice(1);
    }
  return (
    props.alert &&  <>
    <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong> {props.alert.type=='success' ? "Success" : props.alert.type}</strong> {props.alert.msg}
  {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button> */}
</div>
   </>
  )
}

function FormCard({

title,

label,

placeholder,

buttonText,

value,

onChange,

onSubmit

}){


return(

<div className="form-card">


<h2>
{title}
</h2>


<label>
{label}
</label>


<input

value={value}

onChange={onChange}

placeholder={placeholder}

/>



<button onClick={onSubmit}>

{buttonText}

</button>


</div>

)

}


export default FormCard;
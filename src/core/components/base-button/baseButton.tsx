import classnames from 'classnames';

type baseButtonOptions = {
    label: string,
    className?: string,
    otherProps: any // TODO:: HTMLButton Attributes => HTMLButton Element?

}

export default function baseButton({label, className, ...otherProps}: baseButtonOptions) {
    const baseButtonClassName = classnames('base-btn', className);

  return (
    <button className={baseButtonClassName} {...otherProps}>
        {label}
    </button>
  )
}

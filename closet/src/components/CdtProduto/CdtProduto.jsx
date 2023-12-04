import Input from '../Input/Input';
import Select from '../Select/Select';
import styles from './CdtProduto.module.css';


function CdtProduto () {

    const Tamanhos = [{id: 1, tamanho: "PP"},
    {id: 1, tamanho: 35}]

    return (
        <div className={styles.container}>
            <div className={styles.Botao}>
                <button className={styles.bntVoltar}>x</button>
            </div>
            <div className={styles.formulario}>
            <form>
                <div>
                    <Input label="Produto" type="text"/>
                    <Select label="Tamanho" options={Tamanhos}/>
                    <Input label="Descrição" type="text"/>
                    <Input label="Categoria" type=""/>
                    <Input label="Subcategoria" type=""/>
                </div>
                <div>
                    <Input label="Preço" type="number"/>
                    <Input className={styles.File} label="Imagens" type="file"/>
                </div>
            </form>
            </div>
        </div>
    );
};

export default CdtProduto;

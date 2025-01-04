$(document).ready(function() {
    console.log("form-validation");
    $("#formCadastroParticipacao").validate({
        rules: {
            codCampanha: {
                required: true,
                number: true,
                maxlength: 7
            },
            numCpfCnpj: {
                required: true,
                number: true,
                maxlength: 14
            },
            nomeParticipante: {
                required: true
            },
            descEmailParticipante: {
                required: true
            },
            numTelefoneParticipante: {
                required: true,
                number: true
            },
            codTipoParticipante: {
                required: true,
                number: true
            },
            numCpfResponsavel: {
                number: true
            }
        },
        messages: {
            codCampanha: {
                required: "Campo obrigat\u00f3rio",
                number: "Campo num\u00e9rico",
                maxlength: "Apenas 7 caracteres"
            },
            numCpfCnpj: {
                required: "Campo obrigat\u00f3rio",
                number: "Campo num\u00e9rico",
                maxlength: "Apenas 14 caracteres"
            },
            nomeParticipante: {
                required: "Campo obrigat\u00f3rio"
            },
            descEmailParticipante: {
                required: "Campo obrigat\u00f3rio"
            },
            numTelefoneParticipante: {
                required: "Campo obrigat\u00f3rio",
                number: "Campo num\u00e9rico"
            },
            codTipoParticipante: {
                required: "Campo obrigat\u00f3rio",
                number: "Campo num\u00e9rico"
            },
            numCpfResponsavel: {
                number: "Campo num\u00e9rico"
            }
        },
        submitHandler: function() {
            let url = "?" + "p_p_id\x3dcadastrocampanhaparticipacao_WAR_portalsicoobinternetsp\x26p_p_lifecycle\x3d2\x26p_p_state\x3dnormal\x26p_p_mode\x3dview\x26p_p_resource_id\x3dcadastrarParticipacao\x26p_p_cacheability\x3dcacheLevelPage";
            let codCampanha = $("#codCampanha").val();
            let numCpfCnpj = $("#numCpfCnpj").val();
            let nomeParticipante = $("#nomeParticipante").val();
            let descEmailParticipante = $("#descEmailParticipante").val();
            let numTelefoneParticipante = $("#numTelefoneParticipante").val();
            let codTipoParticipante = $("#codTipoParticipante").val();
            let numCooperativa = $("#numCooperativa").val();
            let nomeResponsavel = $("#nomeResponsavel").val();
            let numCpfResponsavel = $("#numCpfResponsavel").val();
            let bolAceitePartipacao = $("#bolAceitePartipacao").find(":selected").val();
            const bodyData = {
                "dadosCampanhaParticipacao": JSON.stringify({
                    "codCampanha": codCampanha,
                    "numCpfCnpj": numCpfCnpj,
                    "nomeParticipante": nomeParticipante,
                    "descEmailParticipante": descEmailParticipante,
                    "numTelefoneParticipante": numTelefoneParticipante,
                    "codTipoParticipante": codTipoParticipante,
                    "numCooperativa": numCooperativa,
                    "nomeResponsavel": nomeResponsavel,
                    "numCpfResponsavel": numCpfResponsavel,
                    "bolAceitePartipacao": bolAceitePartipacao
                })
            };
            console.log("parametros da request SALVAR CAMPANHA PARTICIPACAO: ", bodyData);
            $.ajax({
                url: url,
                type: "POST",
                cache: false,
                datatype: "json",
                data: bodyData,
                beforeSend: function() {
                    esconderMensagemInclusaoSucesso();
                    esconderMensagemInclusaoErro();
                    $("#loader").show()
                },
                success: function(data) {
                    console.log("retorno: ", data);
                    try {
                        if (!data) {
                            $("#loader").hide();
                            throw new Error("Estrutura de dados inv\u00e1lida enviada pelo servidor.");
                        }
                        let retorno = JSON.parse(data);
                        if (retorno.sucesso) {
                            mostrarMensagemInclusaoSucesso();
                            limparCampos()
                        } else
                            mostrarMensagemInclusaoErro()
                    } catch (e) {
                        console.log("Ocorreu um erro ao salvar: " + e)
                    }
                },
                error: function(xhr) {
                    console.log("Ocorreu um erro ao salvar: " + xhr)
                },
                complete: function() {
                    $("#loader").hide()
                }
            })
        }
    })
});
const MAIOR_IDADE = 1;
function mostrarMensagemInclusaoSucesso() {
    $("#mensagem-inclusao-success").show()
}
function mostrarMensagemInclusaoErro() {
    $("#mensagem-erro").show()
}
function esconderMensagemInclusaoSucesso() {
    $("#mensagem-inclusao-success").hide()
}
function esconderMensagemInclusaoErro() {
    $("#mensagem-erro").hide()
}
function limparCampos() {
    $("#formCadastroParticipacao")[0].reset();
    $("#formCadastroParticipacao input").val("")
}
$("#codTipoParticipante").change(function() {
    let valorSelecionado = parseInt($(this).val(), 10);
    if (valorSelecionado === MAIOR_IDADE) {
        $("#nomeResponsavel").val("");
        $("#numCpfResponsavel").val("");
        $("#formCadastroParticipacao select:eq(1)").prop("selectedIndex", 0);
        $("#nomeResponsavel").prop("disabled", true);
        $("#numCpfResponsavel").prop("disabled", true)
    } else {
        $("#formCadastroParticipacao select:eq(1)").prop("selectedIndex", 1);
        $("#nomeResponsavel").prop("disabled", false);
        $("#numCpfResponsavel").prop("disabled", false)
    }
});
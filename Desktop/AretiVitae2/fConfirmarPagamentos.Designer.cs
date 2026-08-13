namespace AretiVitae2
{
    partial class fConfirmarPagamentos
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(fConfirmarPagamentos));
            this.lblTitulo2 = new System.Windows.Forms.Label();
            this.lblTitulo = new System.Windows.Forms.Label();
            this.panel1 = new System.Windows.Forms.Panel();
            this.panel2 = new System.Windows.Forms.Panel();
            this.txtValorPago = new System.Windows.Forms.TextBox();
            this.txtValorPlano = new System.Windows.Forms.TextBox();
            this.txtPlano = new System.Windows.Forms.TextBox();
            this.txtData = new System.Windows.Forms.TextBox();
            this.txtUsuario = new System.Windows.Forms.TextBox();
            this.btnConfirmar = new System.Windows.Forms.Button();
            this.lblValorPago = new System.Windows.Forms.Label();
            this.lblValorPlano = new System.Windows.Forms.Label();
            this.lblData = new System.Windows.Forms.Label();
            this.lblPlano = new System.Windows.Forms.Label();
            this.lblUsuario = new System.Windows.Forms.Label();
            this.lblPagamentos = new System.Windows.Forms.Label();
            this.lblSub3 = new System.Windows.Forms.Label();
            this.lblSub1 = new System.Windows.Forms.Label();
            this.dgwCompras = new System.Windows.Forms.DataGridView();
            this.lblSub2 = new System.Windows.Forms.Label();
            this.lblID = new System.Windows.Forms.Label();
            this.panel1.SuspendLayout();
            this.panel2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dgwCompras)).BeginInit();
            this.SuspendLayout();
            // 
            // lblTitulo2
            // 
            this.lblTitulo2.AutoSize = true;
            this.lblTitulo2.Font = new System.Drawing.Font("Josefin Sans", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblTitulo2.Location = new System.Drawing.Point(246, 11);
            this.lblTitulo2.Name = "lblTitulo2";
            this.lblTitulo2.Size = new System.Drawing.Size(275, 30);
            this.lblTitulo2.TabIndex = 5;
            this.lblTitulo2.Text = "Confirmação de Pagamentos";
            // 
            // lblTitulo
            // 
            this.lblTitulo.AutoSize = true;
            this.lblTitulo.Font = new System.Drawing.Font("Josefin Sans", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblTitulo.Location = new System.Drawing.Point(321, 41);
            this.lblTitulo.Name = "lblTitulo";
            this.lblTitulo.Size = new System.Drawing.Size(112, 30);
            this.lblTitulo.TabIndex = 4;
            this.lblTitulo.Text = "Areti Vitae";
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.lblID);
            this.panel1.Controls.Add(this.panel2);
            this.panel1.Controls.Add(this.lblPagamentos);
            this.panel1.Controls.Add(this.lblSub3);
            this.panel1.Controls.Add(this.lblSub1);
            this.panel1.Controls.Add(this.dgwCompras);
            this.panel1.Controls.Add(this.lblTitulo2);
            this.panel1.Controls.Add(this.lblTitulo);
            this.panel1.Controls.Add(this.lblSub2);
            this.panel1.Location = new System.Drawing.Point(12, 12);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(784, 416);
            this.panel1.TabIndex = 6;
            this.panel1.Paint += new System.Windows.Forms.PaintEventHandler(this.panel1_Paint);
            // 
            // panel2
            // 
            this.panel2.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.panel2.Controls.Add(this.txtValorPago);
            this.panel2.Controls.Add(this.txtValorPlano);
            this.panel2.Controls.Add(this.txtPlano);
            this.panel2.Controls.Add(this.txtData);
            this.panel2.Controls.Add(this.txtUsuario);
            this.panel2.Controls.Add(this.btnConfirmar);
            this.panel2.Controls.Add(this.lblValorPago);
            this.panel2.Controls.Add(this.lblValorPlano);
            this.panel2.Controls.Add(this.lblData);
            this.panel2.Controls.Add(this.lblPlano);
            this.panel2.Controls.Add(this.lblUsuario);
            this.panel2.Location = new System.Drawing.Point(500, 114);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(276, 288);
            this.panel2.TabIndex = 18;
            // 
            // txtValorPago
            // 
            this.txtValorPago.Font = new System.Drawing.Font("Josefin Sans", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtValorPago.Location = new System.Drawing.Point(86, 167);
            this.txtValorPago.Multiline = true;
            this.txtValorPago.Name = "txtValorPago";
            this.txtValorPago.Size = new System.Drawing.Size(110, 25);
            this.txtValorPago.TabIndex = 34;
            // 
            // txtValorPlano
            // 
            this.txtValorPlano.Font = new System.Drawing.Font("Josefin Sans", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtValorPlano.Location = new System.Drawing.Point(146, 100);
            this.txtValorPlano.Multiline = true;
            this.txtValorPlano.Name = "txtValorPlano";
            this.txtValorPlano.Size = new System.Drawing.Size(110, 25);
            this.txtValorPlano.TabIndex = 33;
            // 
            // txtPlano
            // 
            this.txtPlano.Font = new System.Drawing.Font("Josefin Sans", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtPlano.Location = new System.Drawing.Point(16, 100);
            this.txtPlano.Multiline = true;
            this.txtPlano.Name = "txtPlano";
            this.txtPlano.Size = new System.Drawing.Size(110, 25);
            this.txtPlano.TabIndex = 32;
            // 
            // txtData
            // 
            this.txtData.Font = new System.Drawing.Font("Josefin Sans", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtData.Location = new System.Drawing.Point(146, 36);
            this.txtData.Multiline = true;
            this.txtData.Name = "txtData";
            this.txtData.Size = new System.Drawing.Size(110, 25);
            this.txtData.TabIndex = 31;
            // 
            // txtUsuario
            // 
            this.txtUsuario.Font = new System.Drawing.Font("Josefin Sans", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtUsuario.Location = new System.Drawing.Point(16, 36);
            this.txtUsuario.Multiline = true;
            this.txtUsuario.Name = "txtUsuario";
            this.txtUsuario.Size = new System.Drawing.Size(101, 25);
            this.txtUsuario.TabIndex = 30;
            // 
            // btnConfirmar
            // 
            this.btnConfirmar.Font = new System.Drawing.Font("Josefin Sans", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnConfirmar.Location = new System.Drawing.Point(60, 222);
            this.btnConfirmar.Name = "btnConfirmar";
            this.btnConfirmar.Size = new System.Drawing.Size(178, 46);
            this.btnConfirmar.TabIndex = 29;
            this.btnConfirmar.Text = "Confirmar";
            this.btnConfirmar.UseVisualStyleBackColor = true;
            this.btnConfirmar.Click += new System.EventHandler(this.btnConfirmar_Click);
            // 
            // lblValorPago
            // 
            this.lblValorPago.AutoSize = true;
            this.lblValorPago.Font = new System.Drawing.Font("Josefin Sans", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblValorPago.Location = new System.Drawing.Point(100, 144);
            this.lblValorPago.Name = "lblValorPago";
            this.lblValorPago.Size = new System.Drawing.Size(77, 20);
            this.lblValorPago.TabIndex = 28;
            this.lblValorPago.Text = "Valor Pago:";
            // 
            // lblValorPlano
            // 
            this.lblValorPlano.AutoSize = true;
            this.lblValorPlano.Font = new System.Drawing.Font("Josefin Sans", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblValorPlano.Location = new System.Drawing.Point(142, 77);
            this.lblValorPlano.Name = "lblValorPlano";
            this.lblValorPlano.Size = new System.Drawing.Size(98, 20);
            this.lblValorPlano.TabIndex = 27;
            this.lblValorPlano.Text = "Valor do Plano:";
            // 
            // lblData
            // 
            this.lblData.AutoSize = true;
            this.lblData.Font = new System.Drawing.Font("Josefin Sans", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblData.Location = new System.Drawing.Point(142, 12);
            this.lblData.Name = "lblData";
            this.lblData.Size = new System.Drawing.Size(114, 20);
            this.lblData.TabIndex = 26;
            this.lblData.Text = "Data da Compra:";
            // 
            // lblPlano
            // 
            this.lblPlano.AutoSize = true;
            this.lblPlano.Font = new System.Drawing.Font("Josefin Sans", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblPlano.Location = new System.Drawing.Point(11, 77);
            this.lblPlano.Name = "lblPlano";
            this.lblPlano.Size = new System.Drawing.Size(48, 20);
            this.lblPlano.TabIndex = 25;
            this.lblPlano.Text = "Plano: ";
            // 
            // lblUsuario
            // 
            this.lblUsuario.AutoSize = true;
            this.lblUsuario.Font = new System.Drawing.Font("Josefin Sans", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblUsuario.Location = new System.Drawing.Point(12, 12);
            this.lblUsuario.Name = "lblUsuario";
            this.lblUsuario.Size = new System.Drawing.Size(56, 20);
            this.lblUsuario.TabIndex = 24;
            this.lblUsuario.Text = "Usuário:";
            // 
            // lblPagamentos
            // 
            this.lblPagamentos.AutoSize = true;
            this.lblPagamentos.Font = new System.Drawing.Font("Josefin Sans", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblPagamentos.Location = new System.Drawing.Point(23, 328);
            this.lblPagamentos.Name = "lblPagamentos";
            this.lblPagamentos.Size = new System.Drawing.Size(19, 24);
            this.lblPagamentos.TabIndex = 17;
            this.lblPagamentos.Text = "0";
            // 
            // lblSub3
            // 
            this.lblSub3.AutoSize = true;
            this.lblSub3.Font = new System.Drawing.Font("Josefin Sans", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblSub3.Location = new System.Drawing.Point(60, 328);
            this.lblSub3.Name = "lblSub3";
            this.lblSub3.Size = new System.Drawing.Size(167, 24);
            this.lblSub3.TabIndex = 16;
            this.lblSub3.Text = "Pagamentos Pendentes";
            // 
            // lblSub1
            // 
            this.lblSub1.AutoSize = true;
            this.lblSub1.Font = new System.Drawing.Font("Josefin Sans", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblSub1.Location = new System.Drawing.Point(11, 91);
            this.lblSub1.Name = "lblSub1";
            this.lblSub1.Size = new System.Drawing.Size(211, 20);
            this.lblSub1.TabIndex = 7;
            this.lblSub1.Text = "Tabela de Pagamentos pendentes";
            // 
            // dgwCompras
            // 
            this.dgwCompras.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgwCompras.Location = new System.Drawing.Point(15, 114);
            this.dgwCompras.Name = "dgwCompras";
            this.dgwCompras.Size = new System.Drawing.Size(456, 199);
            this.dgwCompras.TabIndex = 6;
            this.dgwCompras.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dgwCompras_CellContentClick);
            this.dgwCompras.CellContentDoubleClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dgwCompras_CellContentDoubleClick);
            // 
            // lblSub2
            // 
            this.lblSub2.AutoSize = true;
            this.lblSub2.Font = new System.Drawing.Font("Josefin Sans", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblSub2.Location = new System.Drawing.Point(496, 91);
            this.lblSub2.Name = "lblSub2";
            this.lblSub2.Size = new System.Drawing.Size(202, 20);
            this.lblSub2.TabIndex = 23;
            this.lblSub2.Text = "Detalhes do Pagamento - Editar";
            // 
            // lblID
            // 
            this.lblID.AutoSize = true;
            this.lblID.Location = new System.Drawing.Point(705, 58);
            this.lblID.Name = "lblID";
            this.lblID.Size = new System.Drawing.Size(35, 13);
            this.lblID.TabIndex = 24;
            this.lblID.Text = "label6";
            this.lblID.Visible = false;
            // 
            // fConfirmarPagamentos
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 440);
            this.Controls.Add(this.panel1);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "fConfirmarPagamentos";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Confirmar Pagamentos";
            this.Load += new System.EventHandler(this.fConfirmarPagamentos_Load);
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.panel2.ResumeLayout(false);
            this.panel2.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dgwCompras)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Label lblTitulo2;
        private System.Windows.Forms.Label lblTitulo;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.DataGridView dgwCompras;
        private System.Windows.Forms.Label lblSub1;
        private System.Windows.Forms.Label lblPagamentos;
        private System.Windows.Forms.Label lblSub3;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.TextBox txtValorPago;
        private System.Windows.Forms.TextBox txtValorPlano;
        private System.Windows.Forms.TextBox txtPlano;
        private System.Windows.Forms.TextBox txtData;
        private System.Windows.Forms.TextBox txtUsuario;
        private System.Windows.Forms.Button btnConfirmar;
        private System.Windows.Forms.Label lblValorPago;
        private System.Windows.Forms.Label lblValorPlano;
        private System.Windows.Forms.Label lblData;
        private System.Windows.Forms.Label lblPlano;
        private System.Windows.Forms.Label lblUsuario;
        private System.Windows.Forms.Label lblSub2;
        private System.Windows.Forms.Label lblID;
    }
}
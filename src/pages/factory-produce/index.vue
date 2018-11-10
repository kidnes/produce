<template>
<div class="factory">
    <el-row>
        <el-col :span="6" v-for="(item, index) in list" :key="index">
            <el-card class="box-card">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="生产文件">
                        <el-upload
                            class="upload-demo"
                            ref="upload"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            :auto-upload="false">
                            <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
                            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传</el-button>
                            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                            </el-upload>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-col>
    </el-row>
</div>
</template>

<script>

export default {
    data() {
        return {
            list: [],
            form: {
                name: '',
                region: ''
            },
            fileList: []
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.send();
        },
        submitUpload() {
            this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        send() {
            this.$http.get('./content/getBatch').then(res => {
                let data = res.data;
                this.list = res.data.list;
            }, res => {
                this.$message.error(res.desc || 'getBatch 请求失败');
            });
        }
    }
};
</script>

<style lang="less">
.factory {
    .box-card {
        margin: 5px;
    }
}
</style>

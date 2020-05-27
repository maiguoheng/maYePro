<template>
    <div>
        <el-drawer :title="titleFun()" :visible.sync="drawerVisible" :direction="direction" :before-close="beforeClose" size="70%">
            <div class="table">
                <div class="item-list">
                    <div class="flex-1 flex-row mr-50">
                        <div class="">需求单号：</div>
                        <div class="flex-1">
                            <el-input v-model="params.tableId" placeholder="请输入订单编号"></el-input>
                        </div>
                    </div>
                    <div class="flex-row flex-1">
                        <div class="" style="margin-left:20px">需求名称：</div>
                        <div class="flex-1">
                            <el-input v-model="params.demandName" placeholder="请输入需求名称"></el-input>
                        </div>
                    </div>
                </div>
                <!-- 下一行 -->
                <div class="item-list">
                    <div class="flex-1 flex ">
                        <div class="">需求主要功能描述：</div>
                        <div class="flex-1">
                            <el-input type="textarea" rows="5" v-model="params.tableId" placeholder="请输入需求主要功能描述"></el-input>
                        </div>
                    </div>

                </div>
                <!-- 下一行 -->
                <div class="item-list">
                    <div class="flex-1 flex-row ">
                        <div class="">需求提出部门：</div>
                        <div class="flex-1">
                            <el-select v-model="params.tichu" clearable placeholder="请选择">
                                <el-option v-for="item in departmentOptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="flex-row flex-1">
                        <div class="" style="margin-left:20px">需求涉及部门：</div>
                        <div class="flex-1">
                            <el-select v-model="params.sheji" clearable placeholder="请选择">
                                <el-option v-for="item in departmentOptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="flex-row flex-1">
                        <div class="" style="margin-left:20px">需求提交人：</div>
                        <div class="flex-1">
                            <el-select v-model="params.tijiaoren" clearable placeholder="请选择">
                                <el-option v-for="item in departmentOptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
                <!-- 下一行 -->
                <div class="item-list">
                    <div class="flex-1 flex-row ">
                        <div class="">部门评估优先级：</div>
                        <div class="flex-1">
                            <el-select v-model="params.departmentLevel" clearable placeholder="请选择">
                                <el-option v-for="item in levelOptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="flex-row flex-1">
                        <div class="" style="margin-left:20px">支撑类型：</div>
                        <div class="flex-1">
                            <el-select v-model="params.zhichengleixing" clearable placeholder="请选择">
                                <el-option v-for="item in configOptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="flex-row flex-1">
                        <div class="" style="margin-left:20px">需求类型：</div>
                        <div class="flex-1">
                            <el-select v-model="params.demandType" clearable placeholder="请选择">
                                <el-option v-for="item in demandOptions" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
            </div>
        </el-drawer>
        <el-pagination style="margin-top:15px;" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.pageNo" :page-sizes="[20,40,60,80]" :page-size="page.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="page.total">
        </el-pagination>
    </div>
</template>

<script>

import updateTable from './components/updateTable'
export default {
    name: 'home',
    components: {
    },
    data() {
        return {
            direction: 'rtl',
            drawerVisible: true,
            page: {
                pageSize: 20,
                pageNo: 1,
                total: 100
            },
            params: {
                tableId: '',//需求单号
                demandName: '',//需求名称
                demandIntro:'',//需求主要功能描述
                tichu:'',//需求提出部门
                sheji:'',//需求涉及部门
                tijiaoren:'',//需求提交人
                departmentLevel:'',//内部评估优先级
                zhichengleixing:'',//支撑类型
                demandType:''//需求类型
            },
            // 支撑类型
            configOptions:[{
                label:'配置',
                value:'config'
            },{
                label:'开发',
                value:'develop'
            }],
            // 需求类型
            demandOptions:[{
                label:'功能及框架性需求',
                value:'1'
            },{
                label:'业务性需求',
                value:'2'
            }],
            departmentOptions: [{
                value: 'value1',
                label: '产品部'
            }, {
                value: 'value2',
                label: '技术部'
            }, {
                value: 'value3',
                label: '管理部'
            }, {
                value: 'value3',
                label: '设计部'
            }, {
                value: 'value4',
                label: '餐饮部'
            }],
            // 高、中、低 内部评估优先级
            levelOptions:[{
                label:'高',
                val:'high'
            },{
                label:'中',
                value:'medium'
            },{
                label:'低',
                value:'low'
            }]
        }
    },
    methods: {

        handleCurrentChange() {
            console.log('更改页的数量');

        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`)
            this.page.pageSize = val
            this.init()
        },
        beforeClose(done) {
            //提示未保存
            console.error(11234);
            this.$confirm('确认关闭？').then(_ => {
                done();
            })
        },
        toggleVisible() {
            this.drawerVisible = !this.drawerVisible
        },
        titleFun() {
            return '新建表单'
        }
    }

}
</script>

<style lang="scss" scoped>
.table {
    padding: 20px;
    .item-list {
        margin-top: 20px;
        display: flex;
        align-items: center;
        input {
            width: 200px;
        }
    }
}

.flex-1 {
    flex: 1;
}
.flex-row {
    display: flex;
    align-items: center;
}
.mr-50 {
    margin-right: 50px;
}
.flex {
    display: flex;
}
</style>
